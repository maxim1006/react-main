import * as express from "express";
import {comments} from "../mocks";

export const commentsRouter = express.Router();

commentsRouter.get('/', (req, res) => {
    res.status(200).json(comments);
});


