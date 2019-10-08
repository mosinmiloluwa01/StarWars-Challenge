import express from 'express';
import getMovieList from '<controllers>/movies';
import getMovieCasts from '<controllers>/movieCasts';
import { createComment, getComments } from '<controllers>/comments';
import validateCastParams from '<middlewares>/validations/casts';
import { validateCommentInput, validateParams } from '<middlewares>/validations/comments';

const movies = express.Router();

movies.get('/', getMovieList);
movies.get('/:id/casts', validateCastParams, getMovieCasts);
movies.get('/:id/comments', validateParams, getComments);
movies.post('/:id/comments', validateParams, validateCommentInput, createComment);


export default movies;
