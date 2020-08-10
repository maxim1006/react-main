import * as express from "express";
import { users } from "../mocks";

export const usersRouter = express.Router();

usersRouter.get("/", (req, res) => {
    setTimeout(() => {
        res.status(200).json(users);
    }, 500);
});

usersRouter.get("/:id", (req, res) => {
    const { id } = req.params;
    res.status(200).json(users[id]);
});
