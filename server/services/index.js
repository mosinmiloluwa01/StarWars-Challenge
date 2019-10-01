import models from '<models>';

const { Film, Comment, Character } = models;

export const getMovies = async () => {
  try{
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
}catch(error){
  console.log(error.message);
}
};

export const getCasts = async (gender, sortParams) => {
  try{
  const movieCasts = await Character.findAll({
    attributes: ['name', 'height', 'gender'],
    where: { gender },
    order: [[`${sortParams}`]]
  });

  return movieCasts;
}catch (error){
  console.log(error.message);
}
};
