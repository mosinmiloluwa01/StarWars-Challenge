import express from 'express';
import { createComment, getComments } from '<controllers>/comments';
import { validateCommentInput, validateCommentParams } from '<middlewares>/validations/comments';

const comments = express.Router();

comments.post('/:id', validateCommentParams, validateCommentInput, createComment);
comments.get('/:id', validateCommentParams, getComments);


export default comments;
