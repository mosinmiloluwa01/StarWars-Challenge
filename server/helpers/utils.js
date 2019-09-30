const displayMessage = (
  res, statusCode, message, data, success = true
) => {
  const payload = success === true ? 'data' : 'error';

  return res.status(statusCode).json({
    status: success === true ? 'success' : 'error',
    message,
    [payload]: data
  });
};

export default displayMessage;
