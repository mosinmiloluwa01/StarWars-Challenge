import Joi from '@hapi/joi';
import { validateInput } from '<helpers>/utils';

export const validateCommentInput = (req, res, next) => {
  const schema = Joi.object({
    comment: Joi.string().pattern(/[a-z0-9]{2,}/i).required().min(2)
      .max(500)
  });
  return validateInput(
    {
      schema, data: req.body, next, res
    }
  );
};

export const validateParams = (req, res, next) => {
  const schema = Joi.object({ id: Joi.number().positive().min(1).required() });
  return validateInput(
    {
      schema, data: req.params, next, res
    }
  );
};
