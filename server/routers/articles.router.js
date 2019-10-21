import * as express from  "express";
import {articles} from "../mocks";

export const articlesRouter = express.Router();

articlesRouter.get('/', (req, res) => {
    res.status(200).json(articles);
});

