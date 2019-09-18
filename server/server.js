const express = require('express');
const bodyParser = require('body-parser');
const {articlesRouter, familyRouter} = require('./routers');

const path = require('path');

const app = express(),
      port = process.env.NODEJS_PORT || 3001,
      root =  '/api/';

const allowCrossDomain = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};



// Add your mock router here
const appRouters = [
    {
        url: 'articles',
        middleware: articlesRouter
    },
    {
        url: 'family',
        middleware: familyRouter
    }
];

app.use(allowCrossDomain);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

appRouters.forEach(router => app.use(root + router.url, router.middleware));

app.listen(port, () => {
    console.log(`Mock server is listening on port ${port}`);
});
