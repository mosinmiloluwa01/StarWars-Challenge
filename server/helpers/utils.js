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
