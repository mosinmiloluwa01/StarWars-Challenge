import requestIp from 'request-ip';
import { isContext } from 'vm';

export const displayMessage = (res, statusCode, dataObject) => res.status(statusCode).json({
  status: statusCode < 200 ? 'ok' : (statusCode < 300 ? 'success' : 'error'),
  ...dataObject,
});

export const getSumOfHeights = (data) => data.reduce(
  (sum, actor) => sum + actor.height, 0
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
  const errors = [];
  const { error } = schema.validate(data);
  const validationStatus = error || true;

  if (validationStatus !== true) {
    validationStatus.details.forEach((err) => {
      errors.push(err.message);
    });
    return displayMessage(res, 400, { message: 'validation error', errors });
  }
  next();
};

export const requestClientIp = (req) => requestIp.getClientIp(req);

export const toUtcFormat = (date) => new Date(date).toUTCString();
