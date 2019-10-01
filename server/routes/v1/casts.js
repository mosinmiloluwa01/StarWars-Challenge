import express from 'express';
import getMovieCasts from '<controllers>/movieCasts';
import validateCastParams from '<validations>/casts';

const casts = express.Router();

casts.get('/:gender', validateCastParams, getMovieCasts);


export default casts;
