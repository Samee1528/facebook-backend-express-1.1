const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    sur_name: {
        type: String,
        required: true
    },
    Gender: {
        type: String,
        required: true
    },
    date_of_birth: {
        type: Date,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('User', userSchema)