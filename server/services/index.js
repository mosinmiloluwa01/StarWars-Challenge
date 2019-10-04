/* eslint-disable camelcase */
import models from '<models>';

const { Film, Comment, Character, FilmCharacter } = models;

export const getMovies = async () => {
  try {
    const films = await Film.findAll({
      attributes: ['title', 'opening_crawl', 'release_date'],
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
    console.log(error.message);
  }
};

export const getCasts = async (gender, sortParams, film_id) => {
  try {
    const casts = await FilmCharacter.findAll({
      attributes: [],
      where: { film_id },
      include: [{
        model: Character,
        where: { gender },
        attributes: ['name', 'height', 'gender'],
        order: [[`${sortParams}`]]
      }],
    });
    const formattedCasts = casts.map((cast) => cast.Character);
    return formattedCasts;
  } catch (error) {
    console.log(error.message);
  }
};

export const getAMovie = async (id) => {
  try {
    const film = await Film.findByPk(id);
    return film;
  } catch (error) {
    console.log(error.message);
  }
};

export const createAComment = async (data) => {
  try {
    const comment = await Comment.create(data);
    return comment;
  } catch (error) {
    console.log(error.message);
  }
};

export const getCommentsByFilmId = async (id) => {
  try {
    const comment = await Comment.findAll({
      attributes: ['comment', 'ip_address', 'createdAt'],
      where: { film_id: id },
      include: [{
        model: Film,
        as: 'film',
        attributes: ['title'],
      }],
      order: [['createdAt', 'DESC']]
    });
    return comment;
  } catch (error) {
    console.log(error.message);
  }
};
