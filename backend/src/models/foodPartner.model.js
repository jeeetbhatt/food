const mongoose = require("mongoose");

const foodPartnerSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('foodPartner', foodPartnerSchema)