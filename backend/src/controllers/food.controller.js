const foodModel = require('../models/food.model');

async function createFoodItem(req, res) {
    console.log(req.foodPartner);
    const createdFoodItem = await foodModel.create({
        name: req.body.name,
        desc: req.body.description,
        video: 'NA',
        foodPartner: req.foodPartner._id
    });

    res.status(201).json({
        messege: 'Food Item Created',
        foodItem: createdFoodItem
    });
}

async function getFoodItems(rrq, res) {
    const foodItem = await foodModel.find();
    res.status(200).json({
        messge: 'Food Item fetced successfully.',
        foodItem
    })
}

module.exports = {
    createFoodItem,
    getFoodItems
}