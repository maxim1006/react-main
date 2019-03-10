const express = require('express');
const articles = require('../mocks/articles');

const articlesRouter = express.Router();

articlesRouter.get('/', (req, res) => {
    res.status(200).json(articles);
});

module.exports = articlesRouter;

