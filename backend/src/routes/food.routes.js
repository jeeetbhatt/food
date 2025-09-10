const express = require('express');
const isFoodPartnerMiddleware = require('../middlewares/auth.middleware')
const router = express.Router();
const multer = require('multer');

const upload = multer({
    storage: multer.memoryStorage()
});

router.get('/', isFoodPartnerMiddleware, upload.single("video")  ,(req,res)=> {
    res.send(req.foodPartner);
})

module.exports = router;