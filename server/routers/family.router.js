import * as express from "express";
import {family} from "../mocks";

export const familyRouter = express.Router();

familyRouter.get('/', (req, res) => {
    // тут делаю небольшую задержку для лоадера и cancel axios request
    setTimeout(() => {
        res.status(200).json(family);
    }, 1000);
});


