// Create the server

const cookieParser = require('cookie-parser');
const express = require('express');

const authRoutes = require('../src/routes/auth.routes');
const foodRoutes = require('../src/routes/food.routes')

const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());

// APIs
app.get('/',(req, res)=>{
    res.send('Namaste!');
});

app.use('/api/auth', authRoutes);
app.use('/api/food', foodRoutes);
module.exports = app;