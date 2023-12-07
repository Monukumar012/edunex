const ErrorHander = require("../utils/errorHander");


module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";

    // Wrong mongodb Id error
    if (err.name === "CastError") {
        const message = `Resource not found , Invalid ${err.path}`;
        err = new ErrorHandler(message, 400);
    }

    //Mongoose duplicate key error
    if (err.code === 11000) {
        const message = `Dupicate ${Object.keys(err.keyValue)} entered`;
        err = new ErrorHander(message, 400);
    }

    //Json Web TOken error
    if (err.name === "JsonWebTokenError") {
        const message = `Json Web Token is invalid, Try again`;
        err = new ErrorHander(message, 400);
    }

    //Json Web TOken expire
    if (err.name === "TokenExpiredError") {
        const message = `Json Web Token is Expired, Try again`;
        err = new ErrorHander(message, 400);
    }


    res.status(err.statusCode).send({
        success: false,
        message: err.message,
    });
};