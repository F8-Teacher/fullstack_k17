const successResponse = (res, data, message, status = 200) => {
  return res.status(status).json({
    message,
    data,
  });
};

const errorResponse = (res, message, errors = {}, status = 500) => {
  return res.status(status).json({
    message,
    errors,
  });
};
module.exports = {
  successResponse,
  errorResponse,
};
