const userModel = require("../models/userModel");
const contactModel = require("../models/contactModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const sendToken = require('../utils/jwtToken');
const ErrorHander = require("../utils/errorHander");
const sendEmail = require('../utils/sendEmail');
const crypto = require('crypto')


exports.registerController = catchAsyncErrors(async (req, res, next) => {
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;
        const confirmPassword = req.body.confirmPassword;

        if (!name || !email || !password) {
                return next(new ErrorHander("Fill all Field", 404));
        }
        if(confirmPassword!==password){
                return next(new ErrorHander("Password does not match", 401))
        }
        const user = new userModel({ name, email, password });
        await user.save();

        sendToken(user, 200, res)
});

exports.getAllUserController = catchAsyncErrors(async (req, res) => {
        console.log("get-all-user Called");

        const users = await userModel.find({});
        return res.status(200).send({
                userCount: users.length,
                success: true,
                message: "all users data",
                users,
        });
});

exports.loginController = catchAsyncErrors(async (req, res, next) => {
        const { email, password } = req.body;
        // console.log(req.body);
        if (!email || !password) {
                return next(new ErrorHander("Please Enter Email and Password", 404));
        }

        const user = await userModel.findOne({ email }).select("+password");
        if (!user) {
                return next(new ErrorHander("User Not Exists", 401));
        }
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
                return next(new ErrorHander("Invalid Email or Password", 401));
        }

        // const token = user.getJWTToken();

        // return res.status(200).send({
        //         success: true,
        //         message: "Login Successfully",
        //         token,
        //         user,
        // });

        sendToken(user, 201, res);
});

exports.contactController = catchAsyncErrors(async (req, res, next) => {
        const { name, email, subject, message } = req.body;

        const contact = new contactModel({ name, email, subject, message });
        await contact.save();

        return res.status(200).send({
                success: true,
                message: "Form Submit Successfully",
        });
});



exports.logoutController = catchAsyncErrors(async (req, res, next) => {

        res.cookie("token", null, {
                expires: new Date(Date.now()),
                httpOnly: true,
        })

        res.status(200).json({
                success: true,
                message: "Logout Successfully"
        })
});


//Forgot Password
exports.forgotPassword = catchAsyncErrors(async (req, res, next) => {
        console.log("Called");
        const user = await userModel.findOne({ email: req.body.email });

        if (!user) {
                return next(new ErrorHander("User Not found", 404));
        }

        const resetToken = user.getResetPasswordToken();

        await user.save({ validateBeforeSave: false });

        const resetPasswordUrl = `${req.protocol}://${req.get("host")}/api/v1/user/password/reset/${resetToken}`;


        const message = `Your password reset token is : \n\n ${resetPasswordUrl} \n\n If you have not requested this email then, please ignore it`;

        try {
                await sendEmail({
                        email: user.email,
                        subject: `Edunexx Password Reset`,
                        message
                });
                res.status(200).json({
                        success: true,
                        message: `Email sent to ${user.email} successfully`,
                })
        } catch (error) {
                resetPasswordToken = undefined;
                resetPasswordExpire = undefined;
                await user.save({ validateBeforeSave: false });

                return next(new ErrorHander(error.message, 500));
        }
});




//Reset Password
exports.resetPassword = catchAsyncErrors(async (req, res, next) => {
        console.log("Called");

        //Creating token hash
        const resetPasswordToken = crypto.createHash("sha256").update(req.params.token).digest("hex");

        const user = await userModel.findOne({
                resetPasswordToken,
                resetPasswordExpire: { $gt: Date.now() },

        })

        if (!user) {
                return next(new ErrorHander("Reset Passwrod Token is Invalid or has been expired", 400));
        }

        if (req.body.password !== req.body.confirmPassword) {
                return next(new ErrorHander("Password does not match"));
        }
        user.password = req.body.password;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save();

        sendToken(user,200,res);

});


//Get user Deatils


exports.getUserDeatilsController = catchAsyncErrors(async (req, res) => {
        // console.log("get-all-user Called");

        const user = await userModel.findById(req.user.id);

        return res.status(200).json({
                success: true,
                user,
        });
});


//Update User Password


exports.updatePasswordController = catchAsyncErrors(async (req, res, next) => {

        const user = await userModel.findById(req.user.id).select("+password");

        const isMatch = await user.comparePassword(req.body.oldPassword);
        if (!isMatch) {
                return next(new ErrorHander("Old Password is incorrect", 401));
        }

        if(req.body.newPassword !== req.body.confirmPassword){
                return next(new ErrorHander("Password does not match", 401));
        }
        user.password = req.body.newPassword;
        await user.save();

        sendToken(user, 200, res);
});



//Update User Profile


exports.updateProfileController = catchAsyncErrors(async (req, res, next) => {

        const newUserData = {
                name: req.body.name,
                email: req.body.email,
        }

        const user = await userModel.findByIdAndUpdate(req.user.id, newUserData,{
                new: true,
                runValidators: true,
                useFindAndModify: false,
        });

        res.status(200).json({
                success:true,
        })
});