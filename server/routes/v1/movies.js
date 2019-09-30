import express from 'express';
import getMovieList from '<controllers>/movies';

const movies = express.Router();

movies.get('/', getMovieList);


export default movies;
