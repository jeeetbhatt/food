// Controller

const userModel = require('../models/user.model');
const foodPartnerModel = require('../models/foodPartner.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

async function registerUser(req, res) {
    const { fullname, email, password } = req.body;

    const userAlreadyExists = await userModel.findOne({email});
    if (userAlreadyExists) {
        return res.status(400).json({
            messege: 'User Already Exists'
        });
    }

    const hashedPassword = await bcrypt.hash(password,10);
    console.log(hashedPassword);

    const createdUser = await userModel.create({
        fullname, email, password: hashedPassword
    });

    const token = jwt.sign({
        id: createdUser._id,
    },'secret');

    res.cookie('token', token);

    res.status(201).json({
        messege:'User Created Successfully!',
        user : {
            id: user._id,
            fullName: createdUser.fullName,
            email: createdUser.email
        }
    });
}

async function loginUser(req, res) {
    const {email, password} = req.body;
    const user = await userModel.findOne({email});

    if (!user) {
        return res.status(400).json({
            messege: 'Invalid Email or Password'
        });
    }
    console.log(bcrypt.compare(password, user.password));
    
    if (!await bcrypt.compare(password, user.password)) {
               return res.status(400).json({
            messege: 'Invalid Email or Password'
        }); 
    }

    const token = jwt.sign({id: user._id},'secret');
    res.cookie('token',token);
    res.status(200).json({
        messge:'User Logged In',
        id: user._id,
        email: user.email
    });
}

function logoutUser(req, res) {
    res.clearCookie('token');
    res.status(200).json({
        messege: 'User Logged Out Successfully'
    });
}

async function registerFoodPartner(req, res) {
    const { fullname, email, password } = req.body;
    
    const userAlreadyExists = await foodPartnerModel.findOne({email});
    if (userAlreadyExists) {
        return res.status(400).json({
            messege: 'User Already Exists'
        });
    }

    const hashedPassword = await bcrypt.hash(password,10);
    console.log(hashedPassword);

    const createdUser = await foodPartnerModel.create({
        fullname, email, password: hashedPassword
    });

    const token = jwt.sign({
        id: createdUser._id,
    }, process.env.JWT_SECRET);

    res.cookie('token', token);

    res.status(201).json({
        messege:'User Created Successfully!',
        user : {
            id: createdUser._id,
            fullName: createdUser.fullName,
            email: createdUser.email
        }
    });
}

async function loginFoodPartner(req, res) {
    const {email, password} = req.body;
    const user = await foodPartnerModel.findOne({email});

    if (!user) {
        console.log("here");
        
        return res.status(400).json({
            messege: 'Invalid Email or Password'
        });
    }
    
    if (!await bcrypt.compare(password, user.password)) {
        return res.status(400).json({
            messege: 'Invalid Email or Password'
        }); 
    }

    const token = jwt.sign({id: user._id},'secret');
    res.cookie('token',token);
    res.status(200).json({
        messge:'User Logged In',
        id: user._id,
        email: user.email
    });
}

function logoutFoodPartner(req, res) {
    res.clearCookie('token');
    res.status(200).json({
        messege: 'User Logged Out Successfully'
    });
}

module.exports = {registerUser, loginUser, logoutUser, registerFoodPartner,loginFoodPartner, logoutFoodPartner};