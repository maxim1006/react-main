import express, { Request, Response } from 'express';
import fsExtra from 'fs-extra';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { UserModel } from '../models/user.model';

const userRouter = express.Router();
const userPath = path.join(__dirname, '../../data', 'user.json');

userRouter.get('/', async (req: Request, res: Response) => {
    const { limit } = req.query;

    try {
        let users = await fsExtra.readJson(userPath);

        res.status(200).json(users.slice(0, Number.isInteger(limit) ? limit : users.length));
    } catch (e) {
        res.status(500).json({});
    }
});

userRouter.get('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const users = await fsExtra.readJson(userPath);
        const user = users.find((user: UserModel) => user.id === id);

        res.status(200).json(user);
    } catch (e) {
        res.status(500).json({});
    }
});

userRouter.post('/', async (req: Request, res: Response) => {
    const { body } = req;
    const uniqueUserId = uuidv4();
    const userValue = {
        id: uniqueUserId,
        ...body,
    };

    try {
        let users = await fsExtra.readJson(userPath);
        users.push(userValue);

        await fsExtra.writeJson(userPath, users);

        res.status(201).json(userValue);
    } catch (e) {
        res.status(500).json({});
    }
});

userRouter.delete('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        let users = await fsExtra.readJson(userPath);
        const deletedUser = users.find((user: UserModel) => user.id === id);

        await fsExtra.writeJson(
            userPath,
            users.filter((i: UserModel) => i.id !== id)
        );

        res.status(200).json(deletedUser);
    } catch (e) {
        res.status(500).json({});
    }
});

userRouter.put('/', async (req: Request, res: Response) => {
    const { body } = req;
    const id = body.id;

    try {
        const users = await fsExtra.readJson(userPath);
        const user = users.find((user: UserModel) => user.id === id);
        const updatedUsers = users.map((user: UserModel) => {
            if (user.id === id) return { ...user, ...body };

            return user;
        });

        await fsExtra.writeJson(userPath, updatedUsers);

        res.status(200).json(user);
    } catch (e) {
        res.status(500).json({});
    }
});

export { userRouter };
