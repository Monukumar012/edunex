const internshipModel = require('../models/internshipModel');
const catchAsyncErrors = require('../middleware/catchAsyncErrors')
const ErrorHandler = require("../utils/errorHander");


exports.addInternshipController = catchAsyncErrors(
    async (req, res) => {
        const {
            role, duration, location, skills, minQualifications, responsibilities, imageurl
        } = req.body;

        if (!role || !duration || !location || !skills || !minQualifications || !responsibilities || !imageurl) {
            // return res.status(201).send({
            //     success: false,
            //     message: "Fill All Field"
            // })
            return next(new ErrorHandler("Fill All Field", 404));
        }


        const existingIntern = await internshipModel.findOne({ role })
        if (existingIntern) {
            // return res.status(401).send({
            //     success: false,
            //     message: "Internship Already Exists"
            // })
            return next(new ErrorHandler("Internship Already Exists", 404));
            
        }

        const intern = new internshipModel({
            role, duration, location, skills, minQualifications, responsibilities, imageurl
        });

        await intern.save();

        return res.status(201).send({
            success: true,
            message: "Internship added successfully"
        })


    }
)




exports.getAllInternshipController = catchAsyncErrors(
    async (req, res) => {
        const interns = await internshipModel.find({})

        return res.status(201).send({
            success: true,
            message: "All Intens Are Founded",
            internCount: interns.length,
            interns
        })

    }
)


exports.getInternship = catchAsyncErrors(
    async (req, res) => {

        console.log("get inten called");
        const { id } = req.params
        const intern = await internshipModel.findById(id)

        if (!intern) {
            // return res.status(401).send({
            //     success: false,
            //     message: "Internship not available"
            // })
            return next(new ErrorHandler("Internship not available", 404));
        }

        return res.status(201).send({
            success: true,
            message: "Intens Founded",
            intern
        })

    }
)