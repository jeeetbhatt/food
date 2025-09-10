const { default: mongoose } = require("mongoose");

const foodPartnerSchema = mongoose.Schema({
    fullname: {
        type: String,
    },email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('foodPartnerModel', foodPartnerSchema)