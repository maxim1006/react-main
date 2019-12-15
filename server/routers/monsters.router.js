import * as express from  "express";
import {monsters} from "../mocks";

export const monsterRouter = express.Router();

monsterRouter.get('/', (req, res) => {
    res.status(200).json(monsters);
});

