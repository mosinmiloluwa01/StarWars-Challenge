import express from 'express';
import movies from './movies';

const router = express.Router();

router.use('/movies', movies);

export default router;
