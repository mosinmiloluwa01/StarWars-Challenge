import { displayMessage } from '<helpers>/utils';

const validateCastParams = (req, res, next) => {
  const { sortParams } = req.query;
  const { gender } = req.params;
  const errors = [];

  if (!['male', 'female'].includes(gender)) {
    errors.push('gender should either be \'male\', \'female\'');
  }
  if (!['name', 'gender', 'height'].includes(sortParams)) {
    errors.push('sortParams should either be \'name\', \'gender\', \'height\'');
  }
  if (errors.length === 0) {
    return next();
  }
  return displayMessage(res, 400, { message: 'validation error', errors });
};

export default validateCastParams;
