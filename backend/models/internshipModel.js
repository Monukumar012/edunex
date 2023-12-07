const mongoose = require('mongoose')

const internshipScheme = new mongoose.Schema({
        role:{
                type:String,
                required:[true,"role is required"]
        },
        duration:{
                type:String,
                required:[true,"duration is required"]
        },
        location:{
                type:String,
                required:[true,"location is required"]
        },
        skills:{
                type:Array,
                required:[true,"skills is required"]
        },
        minQualifications:{
                type:Array,
                required:[true,"minQualifications is required"]
        },
        responsibilities:{
                type:Array,
                required:[true,"responsibilities is required"]
        },
        imageurl:{
                type:String,
                required:[true,"imageurl is required"]
        },
},{timestamps:true})


const internshipModel = mongoose.model('Internships', internshipScheme)

module.exports = internshipModel;