/* eslint-disable camelcase */
import axios from 'axios';
import models from '<models>';

const { Film, Character, FilmCharacter } = models;

const createDBData = async () => {
  try {
    const { data: { results: movieData } } = await axios.get('https://swapi.co/api/films');

    movieData.forEach(async (result) => {
      const { title, opening_crawl, release_date, characters } = result;
      const movies = { title, opening_crawl, release_date };

      const { id: filmId } = await Film.create(movies);
      characters.forEach(async (character) => {
        const data = await axios.get(character);
        const { name, height, gender } = data.data;
        const characterData = { name, height: height === 'unknown' ? 0 : height, gender };
        const [{ id: characterId }] = await Character.findOrCreate({
          where: { ...characterData },
          defaults: characterData
        });
        await FilmCharacter.create({ film_id: filmId, character_id: characterId });
      });
    });
  } catch (error) {
    console.log(error);
  }
};

createDBData();
