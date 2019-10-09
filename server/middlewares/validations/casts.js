import { displayMessage } from '<helpers>/utils';

const validateCastParams = (req, res, next) => {
  const { sortParams, order } = req.query;
  const { id } = req.params;
  const errors = [];

  if (/\D/g.test(id) || +id < 1) {
    errors.push(' \'id\' must be a postive integer that is greater than 0');
  }
  if (sortParams && !['name', 'gender', 'height'].includes(sortParams)) {
    errors.push('sortParams should either be \'name\', \'gender\', \'height\'');
  }
  if (order && !['ASC', 'DESC', 'asc', 'desc'].includes(order)) {
    errors.push('order should be one of the following: \'ASC\', \'DESC\', \'asc\', \'desc\'');
  }
  if (errors.length === 0) {
    return next();
  }
  return displayMessage(res, 400, { message: 'validation error', errors });
};

export default validateCastParams;
