import * as express from "express";
import {posts} from "../mocks";

export const postsRouter = express.Router();

postsRouter.get('/', (req, res) => {
    res.status(200).json(posts);
});


