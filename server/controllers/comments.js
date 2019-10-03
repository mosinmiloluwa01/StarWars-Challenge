import { displayMessage, requestClientIp } from '<helpers>/utils';
import { getAMovie, createAComment } from '<services>';

const createComment = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await getAMovie(id);
    if (!movie) {
      return displayMessage(res, 404, { status: 'error', message: 'movie not found' });
    }
    const data = {
      film_id: id,
      comment: req.body.comment,
      ip_address: requestClientIp(req)
    };
    const comment = await createAComment(data);
    return displayMessage(res, 200, { status: 'success', message: 'comment created', data: comment });
  } catch (error) {
    return displayMessage(res, 500, { status: 'error', message: 'server error', error: error.message });
  }
};

export default createComment;
