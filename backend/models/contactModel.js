const mongoose = require('mongoose')

const contactScheme = new mongoose.Schema({
        name:{
                type:String,
                required:[true,"name is required"]
        },
        email:{
                type:String,
                required:[true,"email is required"]
        },
        subject:{
                type:String,
                required:[true,"subject is required"]
        },
        message:{
                type:String,
                required:[true,"message is required"]
        },
},{timestamps:true})


const contactmodel = mongoose.model('Contact', contactScheme)

module.exports = contactmodel;