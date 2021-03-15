const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    contactInfo: {
        address: String,
        phoneNumber: Number,
        city: String,
        state: String
    }
}
)

const User = mongoose.model('User', userSchema)

module.exports = User