import Joi from '@hapi/joi';
import { validateInput } from '<helpers>/utils';

export const validateCommentInput = (req, res, next) => {
  const schema = Joi.object({ comment: Joi.string().required().min(2) });
  return validateInput(
    {
      schema, data: req.body, next, res
    }
  );
};

export const validateCommentParams = (req, res, next) => {
  const schema = Joi.object({ id: Joi.number().positive().min(1).required() });
  return validateInput(
    {
      schema, data: req.params, next, res
    }
  );
};
