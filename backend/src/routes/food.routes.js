const express = require('express');
const authMiddleware = require('../middlewares/auth.middleware');
const foodController = require('../controllers/food.controller')
const router = express.Router();
const multer = require('multer');

const upload = multer({
    storage: multer.memoryStorage()
});

router.post('/', authMiddleware.isFoodPartnerMiddleware, upload.single("video"), foodController.createFoodItem);
router.get('/food', authMiddleware.isUserMiddleware,foodController.getFoodItems);


module.exports = router;