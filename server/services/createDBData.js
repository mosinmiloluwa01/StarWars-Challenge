/* eslint-disable camelcase */
import axios from 'axios';
import models from '<models>';

const { Film } = models;

const findOrCreateDBData = async (url, model) => {
  try {
    const movieList = await axios.get(url);
    const { results } = movieList.data;

    results.map((movie) => {
      const { title, opening_crawl, release_date } = movie;
      const data = { title, opening_crawl, release_date };

      model.findOrCreate({
        where: { title },
        defaults: data
      });
      return '';
    });
  } catch (error) {
    console.log(error.message);
  }
};

findOrCreateDBData('https://swapi.co/api/films', Film);
