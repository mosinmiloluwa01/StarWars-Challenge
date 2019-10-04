import { displayMessage, requestClientIp, toUtcFormat } from '<helpers>/utils';
import { getAMovie, createAComment, getCommentsByFilmId } from '<services>';

export const createComment = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await getAMovie(id);

    if (!movie) {
      return displayMessage(res, 404, { message: 'movie not found' });
    }

    const data = {
      film_id: id,
      comment: req.body.comment.trim(),
      ip_address: requestClientIp(req)
    };

    const comment = await createAComment(data);

    return displayMessage(res, 200, { message: 'comment created', data: comment });
  } catch (error) {
    return displayMessage(res, 500, { message: 'server error', error: error.message });
  }
};

export const getComments = async (req, res) => {
  try {
    const movie = await getAMovie(req.params.id);

    if (!movie) {
      return displayMessage(res, 404, { message: 'movie does not exist' });
    }
    const comments = await getCommentsByFilmId(req.params.id);

    comments.forEach((comment) => {
      comment.dataValues.comment = comment.dataValues.comment.substring(0, 500);
      comment.dataValues.createdAt = toUtcFormat(comment.dataValues.createdAt);
    });

    return displayMessage(res, 200, { message: 'comments retrieved successfully', data: comments });
  } catch (error) {
    return displayMessage(res, 500, { message: 'server error', error: error.message });
  }
};

export default createComment;
