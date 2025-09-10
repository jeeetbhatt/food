const jwt = require('jsonwebtoken');
const foodPartnerModel = require('../models/foodPartner.model')

async function isFoodPartnerMiddleware(req, res, next) {
    const token = req.cookies.token;

    if (!token) {
        res.status(401).json({
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

module.exports = isFoodPartnerMiddleware;