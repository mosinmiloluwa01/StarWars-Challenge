import models from '<models>';

const { Film, Comment } = models;

const filmService = async () => {
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
};

export default filmService;
