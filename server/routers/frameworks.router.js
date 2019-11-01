import * as express from  "express";
import {frameworks} from "../mocks";

export const frameworksRouter = express.Router();

frameworksRouter.get('/', (req, res) => {
    res.status(200).json(frameworks);
});

