import express from 'express';
import movies from './movies';
import casts from './casts';
import comments from './comments';

const router = express.Router();

router.use('/movies', movies);
router.use('/casts', casts);
router.use('/comments', comments);

export default router;
