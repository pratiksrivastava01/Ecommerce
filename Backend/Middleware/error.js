import errorHandler from "../Utils/errorHandler.js";

const err = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  err.message = err.message || "Internal Server Error";

  // Wrong MongoDB error
  if(err.name === "CastError")
  {
    const message = `Resource not found. Invalid: ${err.path}`
    err = new errorHandler(message, 400)
  }

  res.status(err.statusCode).json({
    success: false,
    error: err,
    message: err.message,
    // stack: err.stack,
  });
};

export default err;
