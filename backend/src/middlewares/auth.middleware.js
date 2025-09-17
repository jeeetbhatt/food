const jwt = require('jsonwebtoken');
const foodPartnerModel = require('../models/foodPartner.model');
const userModel = require('../models/user.model');

async function isFoodPartnerMiddleware(req, res, next) {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({
            messege: 'Unauthorised User!'
        });
    }

    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const foodPartner = await foodPartnerModel.findById(decodedToken.id);
        req.foodPartner = foodPartner;
        next();
    } catch (err) {
        res.status(401).json({
            messege: 'Unauthorised User!'
        });
    }
}

async function isUserMiddleware(res, req, next) {

    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({
            messege: 'Unauthorised User'
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const fetchedUser = await userModel.findById(decoded.id);
        req.user = fetchedUser;
        next();

    } catch (err) {
        return res.status(401).json({
            messege: 'Unauthorised User'
        })
    }

}

module.exports = { isFoodPartnerMiddleware, isUserMiddleware };