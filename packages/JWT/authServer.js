// этот  сервер только для аутентификации
const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

require('dotenv').config();

// allow to use json from body req
app.use(express.json());

// в реальной жизни беру из дб
let refreshTokens = [];

app.post('/token', (req, res, next) => {
    const refreshToken = req.body.refreshToken;

    if (!refreshToken) {
        next({
            status: 401,
            message: 'No refresh token provided!'
        });
    }

    if (!refreshTokens.includes(refreshToken)) {
        next({
            status: 403,
            message: 'No such refresh token!'
        });
    }

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, data) => {
        if (err) {
            next({
                status: 403,
                message: 'Verify token error!'
            });
        }

        // чтобы не прокидывать доп инфо из токена прокидываю только name
        const accessToken = generateAccessToken({ name: data.name });

        res.json({ accessToken });
    });
});

app.post('/login', (req, res) => {
    // Прежде чем работать с токеном юзера его надо authenticate смотри папку с passport
    const { name } = req.body;
    const user = { name };

    // Секрет получаю так: открываю консоль node затем require("crypto").randomBytes(64).toString('hex')
    const accessToken = generateAccessToken(user);
    // убиваю этот токен только на логаут, даты экспирации у него нет
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
    // также вставляю рефреш токен
    refreshTokens.push(refreshToken);

    res.json({ accessToken, refreshToken });
});

app.delete('/logout', (req, res) => {
    refreshTokens = refreshTokens.filter(i => i !== req.body.refreshToken);

    console.log(refreshTokens);

    res.status(202).json({
        message: 'token is deleted'
    });
});

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

app.listen(1338, () => console.log('server is running on 1338 port'));

// helpers
function generateAccessToken(data) {
    return jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '20s' });
}
