import * as express from "express";
import {posts, todos} from "../mocks";

export const hooksRouter = express.Router();

hooksRouter.get('/posts', (req, res) => {
    res.status(200).json(posts);
});

hooksRouter.get('/todos', (req, res) => {
    // это для проверки cancelTimeout через axios
    setTimeout(() => {
        res.status(200).json(todos);
    }, 1000);
});


