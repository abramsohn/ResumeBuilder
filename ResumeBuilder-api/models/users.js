//// DEPENDENCIES ////
const mongoose = require('mongoose')

//// SCHEMA ////
const userSchema = mongoose.Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    contactInfo: {
        address: String,
        phoneNumber: Number,
        city: String,
        state: String
    }
});

//// EXPORT ////
module.exports = mongoose.model('User', userSchema)