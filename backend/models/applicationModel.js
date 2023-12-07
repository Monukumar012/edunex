const mongoose = require('mongoose')

const applicationScheme = new mongoose.Schema({
        name: {
                type: String,
                required: [true, "name is required"]
        },
        email: {
                type: String,
                required: [true, "email is required"]
        },
        mobile: {
                type: String,
                required: [true, "mobile is required"]
        },
        internship: {
                type: String,
                required: [true, "internship is required"]
        },
        qualification: {
                type: String,
                required: [true, "qualification is required"]
        },
        major: {
                type: String,
                required: [true, "major is required"]
        },
        college: {
                type: String,
                required: [true, "college is required"]
        },
        linkedin: {
                type: String,
                required: [true, "linkedin is required"]
        },
        github: {
                type: String,
                required: [true, "github link is required"]
        },
        status: {
                type: String,
                default: "Pending",
        },
        file: {
                type:String,
                required : [true, "Resume is required"]
        },
}, { timestamps: true })


const applicationModel = mongoose.model('Application', applicationScheme)

module.exports = applicationModel;