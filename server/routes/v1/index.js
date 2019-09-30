import express from 'express';
import movies from './movies';
import casts from './casts';

const router = express.Router();

router.use('/movies', movies);
router.use('/casts', casts);

export default router;
