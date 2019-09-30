/* eslint-disable camelcase */
import axios from 'axios';
import models from '<models>';

const { Film, Character } = models;

const createDBData = async (url, model, type) => {
  let data;
  try {
    const resData = await axios.get(url);
    const { results } = resData.data;

    results.map((result) => {
      if (type === 'casts') {
        const { name, height, gender } = result;
        data = { name, height, gender };
        model.create(data);
        return;
      }
      const { title, opening_crawl, release_date } = result;
      data = { title, opening_crawl, release_date };

      model.create(data);
    });
  } catch (error) {
    console.log(error.message);
  }
};

createDBData('https://swapi.co/api/films', Film, 'movies');
createDBData('https://swapi.co/api/people', Character, 'casts');
