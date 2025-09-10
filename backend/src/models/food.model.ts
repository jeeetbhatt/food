const mongoose = require('mongoose');

const foodSchema = mongoose.Schema({
    name: {
        type : String,
        required: true
    },
    video: {
        type: String,
        required: true
    },
    desc: String,
    foodPartner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "foodPartner",
    }
});

module.exports =  mongoose.model('food', foodSchema);