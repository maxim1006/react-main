import * as express from  "express";
import {Doors} from "../db/models/doors";

export const doorsRouter = express.Router();

doorsRouter.get('/', async (req, res) => {
    try {
        const doors = await Doors.find({}).exec();
        res.status(200).json(doors);
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
});

