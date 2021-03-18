//// DEPENDENCIES ////
const mongoose = require('mongoose')

//// SCHEMA ////
const userSchema = mongoose.Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    firstName: { type: String, },
    lastName: { type: String, },
    masterResume: {
        title: String,
        email: String,
        city: String,
        address: String,
        state: String,
        summary: String,
        experience: [{
            placeOfWork: { type: String, required: true },
            yearsWorked: { type: String, required: true },
            listPoints: { type: String }
        }],
        education: [{
            school: { type: String },
            yearsAttended: { type: String },
            degree: { type: String }
        }],
        skills: { type: String } 
    }
});

//// EXPORT ////
module.exports = mongoose.model('User', userSchema)