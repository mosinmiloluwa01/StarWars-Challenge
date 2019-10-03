import requestIp from 'request-ip';

export const displayMessage = (res, statusCode, dataObject) => res.status(statusCode).json({
  status: statusCode < 300 ? 'success' : 'error',
  ...dataObject,
});

export const getSumOfHeights = (data) => data.reduce(
  (sum, actor) => sum + actor.dataValues.height, 0
);

export const convertToFeet = (heightInCM) => {
  const heightInFeet = ((heightInCM * 0.393700) / 12);
  const feet = Math.floor(heightInFeet);
  const inches = ((heightInFeet - feet) * 12).toFixed(2);
  return `${feet}ft ${inches}inches`;
};

export const validateInput = ({
  schema, data, next, res
}) => {
  const { error } = schema.validate(data);
  const validationStatus = error || true;

  if (validationStatus !== true) {
    return displayMessage(res, 400, { message: 'validation error', error: validationStatus });
  }
  next();
};

export const requestClientIp = (req) => requestIp.getClientIp(req);

export const toUtcFormat = (date) => new Date(date).toUTCString();
