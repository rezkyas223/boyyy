const errors = (res, statusCode, { message, error }) => {
  return res.status(statusCode).json({ message: message, error: error });
};

module.exports = errors;
