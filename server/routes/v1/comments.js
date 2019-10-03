import express from 'express';
import createComment from '<controllers>/comments';
import { validateCommentInput, validateCommentParams } from '<middlewares>/validations/comments';

const comments = express.Router();

comments.post('/:id', validateCommentParams, validateCommentInput, createComment);


export default comments;
