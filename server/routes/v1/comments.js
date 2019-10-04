import express from 'express';
import { createComment, getComments } from '<controllers>/comments';
import { validateCommentInput, validateParams } from '<middlewares>/validations/comments';

const comments = express.Router();

comments.post('/:id', validateParams, validateCommentInput, createComment);
comments.get('/:id', validateParams, getComments);


export default comments;
