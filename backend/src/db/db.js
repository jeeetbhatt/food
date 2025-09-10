// Database

const mongoose = require('mongoose');
require('dotenv').config();
function connectDB() {
    mongoose.connect(process.env.MONGODB_URL).then(() => {
        console.log('DB Connected!');
    }).catch((err) => {
        console.log("MongoDB Connecrion Error: ", err);
    });
}

module.exports = connectDB;