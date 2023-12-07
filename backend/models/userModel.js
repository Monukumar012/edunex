const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const crypto = require('crypto')

const userSchema = new mongoose.Schema({
        name: {
                type: String,
                required: [true, "name is required"],
                maxLength: [30, "Pasword should be less than 30 characters"],
                minLength: [4, "Name should be greater than 4 characters"],
        },
        email: {
                type: String,
                required: [true, "email is required"],
                unique: true,
                validate: [validator.isEmail, "Please Enter a valid Email"]
        },
        password: {
                type: String,
                required: [true, "password is required"],
                minLength: [8, "Pasword should be greater than 8 characters"],
                select: false,
        },
        role: {
                type: String,
                default: "user"
        },
        resetPasswordToken: String,
        resetPasswordExpire: Date,
}, { timestamps: true });


userSchema.pre("save", async function (next) {
        if (!this.isModified("password")) {
                next();
        }
        this.password = await bcrypt.hash(this.password, 10);
})

//JWT Token
userSchema.methods.getJWTToken = function () {
        return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
                expiresIn: process.env.JWT_EXPIRE,
        })
}

//Compare Password

userSchema.methods.comparePassword = async function (eneteredPassword) {

        return await bcrypt.compare(eneteredPassword, this.password);

}



// Generating Password reset token

userSchema.methods.getResetPasswordToken = function () {
        //Genrating TOken
        const resetToken = crypto.randomBytes(20).toString("hex");

        //Hashing and adding resetPasswordToken to user Model
        this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex")
        this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

        return resetToken;
}


const userModel = mongoose.model('User', userSchema)

module.exports = userModel;