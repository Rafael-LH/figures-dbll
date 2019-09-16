/**
 * Moduels
 */
const Boom = require("boom");
const isXMLHttpRequest = require("../isXMLHttpRequest");
const { prod } = require("../../config/index");

const errorLog = (err, req, res, next) => {
  console.log(err);
  next(err);
};

// Show error stack if enviroment is develop
const errorWithStack = (error, stack) => {
  if (!prod) return { ...error, stack };
  return error;
};

// Error become boom
const boomError = (err, req, res, next) => {
  if (!err.isBoom) return next(Boom.badImplementation(err));
  next(err);
};

// Send error message to client
const clientError = (err, req, res, nexy) => {
  // Destructuring boom error
  const {
    output: { statusCode, payload }
  } = err;

  if (req.headerSent || req.isXMLHttpRequest()) {
    res.set("Content-Type", "application/json");
    return res.status(statusCode).json(errorWithStack(payload, err.stack));
  }

  next(err);
};

module.exports = {
  errorLog,
  boomError,
  clientError
};
