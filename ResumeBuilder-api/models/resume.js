const mongoose = require('mongoose')

const resumeSchema = mongoose.Schema({
    summary: { type: String },
    experience: [{
        placeOfWork: { type: String, required: true },
        yearsWorked: { type: String, required: true },
        listPoints: { type: String }
     }],
    education: [{
        schoool: { type: String },
        yearsAttended: { type: String },
        degree: { type: String }
    }],
    skills: { type: String } 
})



module.exports = mongoose.model('Resume', resumeSchema)