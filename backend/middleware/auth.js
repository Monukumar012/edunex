const userModel = require("../models/userModel");
const ErrorHander = require("../utils/errorHander");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require('jsonwebtoken')



const isAuthenticatedUser = catchAsyncErrors(
    async (req, res,next) => {
        // console.log("Auth called");
        const token = req.cookies.token;
        if(!token){
            return next(new ErrorHander("Please Login to access this", 401));
        }

        const decodedData = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await userModel.findById(decodedData.id);

        next()

    }
)

module.exports = isAuthenticatedUser