import express from 'express';
import getMovieCasts from '<controllers>/movieCasts';
import validateCastParams from '<middlewares>/validations/casts';
import { validateParams } from '<middlewares>/validations/comments';

const casts = express.Router();

casts.get('/:id/:gender', validateCastParams, getMovieCasts);


export default casts;
