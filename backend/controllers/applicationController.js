const applicationModel = require('../models/applicationModel')
const catchAsyncErrors = require('../middleware/catchAsyncErrors')




exports.addApplicationController = catchAsyncErrors(
        async (req, res) => {
  
                const {
                        name, mobile, internship, qualification,
                        major, college, linkedin, github, status

                } = req.body;

                
                const application = new applicationModel({
                        name, email: req.user.email, mobile, internship, qualification,
                        major, college, linkedin, github, status,  
                })

                if(req.file){
                        application.file = req.file.path
                }
                await application.save()

                return res.status(200).send({
                        success: true,
                        message: "Application Submit Successfully"
                })

        }
)



exports.getApplicationsController = catchAsyncErrors(
        async (req, res) => {
                // console.log("APi called using email");
                const { email } = req.params;


                const applications = await applicationModel.find({ email });
                // console.log(applications);

                return res.status(200).send({
                        success: true,
                        applications,
                })



        }
)




exports.getByIDApplicationsController = catchAsyncErrors(
        async (req, res) => {
                // console.log("callle");
                const { id } = req.params;
                console.log("APi called using id");

                const application = await applicationModel.findById(id);
                // console.log(application);

                return res.status(200).send({
                        success: true,
                        message: "Appilcation Founded",
                        application,
                })

        }
)