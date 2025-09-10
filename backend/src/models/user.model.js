// User Model

const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: String
}, {
    timestamp: true
});

const userModel = mongoose.model('userSchema',userSchema);
module.exports = userModel;