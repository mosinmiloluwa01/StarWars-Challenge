/* eslint-disable no-useless-catch */
/* eslint-disable camelcase */
import models from '<models>';

const { Film, Comment, Character, FilmCharacter } = models;

export const getMovies = async () => {
  try {
    const films = await Film.findAll({
      attributes: ['id', 'title', 'opening_crawl', 'release_date'],
      include: [{
        model: Comment,
        as: 'comments',
        attributes: ['comment'],
      }],
      order: [['release_date']]
    });

    films.forEach((film) => {
      film.dataValues.commentCount = film.dataValues.comments.length;
      delete film.dataValues.comments;
    });

    return films;
  } catch (error) {
    throw error;
  }
};

export const getCasts = async ({ gender, sortParams, id, order }) => {
  try {
    const sort = sortParams || 'name';
    const sortOrder = order ? order.toUpperCase() : 'ASC';
    const query = {
      attributes: [],
      where: { film_id: id },
      include: [{
        model: Character,
        attributes: ['id', 'name', 'height', 'gender'],
      }],
      order: [[Character, sort, sortOrder]]
    };
    if (gender) query.include[0].where = { gender };
    const casts = await FilmCharacter.findAll(query);
    const formattedCasts = casts.map((cast) => cast.Character);
    return formattedCasts;
  } catch (error) {
    throw error;
  }
};

export const getAMovie = async (id) => {
  try {
    const film = await Film.findByPk(id);
    return film;
  } catch (error) {
    throw error;
  }
};

export const createAComment = async (data) => {
  try {
    const comment = await Comment.create(data);
    return comment;
  } catch (error) {
    throw error;
  }
};

export const getCommentsByFilmId = async (id) => {
  try {
    const comment = await Comment.findAll({
      attributes: ['id', 'comment', 'ip_address', 'createdAt'],
      where: { film_id: id },
      order: [['createdAt', 'DESC']]
    });
    return comment;
  } catch (error) {
    throw error;
  }
};
