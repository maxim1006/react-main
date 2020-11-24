const express = require('express');
const app = express();
const { family } = require('./family.data');
const jwt = require('jsonwebtoken');

require('dotenv').config();

// allow to use json from body req
app.use(express.json());

// сюда вставляю миддлвер который проверит не протух ли токен
app.get('/family', authenticateTokenMiddleware, (req, res) => {
    // если authenticated узнаешь свой возраст
    res.json(family.filter(i => i.name === req.user.name));
});

app.get('/', (req, res) => {
    res.json('Hello world');
});

// middleware для проверки юзера
function authenticateTokenMiddleware(req, res, next) {
    const authHeader = req.headers['authorization'];
    // header будет вида Bearer Token, поэтому забираю только токен
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        next({
            status: 401,
            message: 'Please provide access token!'
        });
    }

    // user - value которое сериализуется
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        // если токен есть но он протух
        if (err) {
            next({
                status: 403,
                message: 'Token is not valid! You dont have access!'
            });
        }

        req.user = user;
        next();
    });
}

// error handler
app.use((error, req, res, next) => {
    if (error.status) {
        res.status(error.status);
    } else {
        res.status(500);
        console.error('something bad happened');
    }

    res.json({
        message: error.message,
        stack: process.env.NODE_ENV === 'production' ? 'No stack in prod' : error.stack
    });
});

app.listen(1337, () => console.log('server is running on 1337 port'));
