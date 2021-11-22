import * as express from 'express';
import { users } from '../mocks';
import { generateUniqueId } from '../helpers/helpers';
import * as fsExtra from 'fs-extra';
import path from 'path';

export const usersRouter = express.Router();

const rootDir = path.dirname(process.mainModule.filename);
const usersPath = path.join(rootDir, 'data', 'users.json');

usersRouter.get('/', async (req, res) => {
    // это search params http://localhost:3001/api/v1/users?limit=5
    const { limit } = req.query;

    // через фейкер
    // setTimeout(() => {
    //     res.status(200).json(users.slice(0, limit));
    // }, 500);

    try {
        let users = await fsExtra.readJson(usersPath);

        res.status(200).json(users);
    } catch (e) {
        res.status(500).json({});
    }
});

usersRouter.get('/:id', async (req, res) => {
    const { id } = req.params;

    // через фейкер
    // res.status(200).json(users[id]);

    try {
        let users = await fsExtra.readJson(usersPath);

        setTimeout(() => {
            res.status(200).json(users[id]);
        }, 2000);
    } catch (e) {
        res.status(500).json({});
    }
});

usersRouter.post('/', async (req, res) => {
    const { body } = req;
    const uniqueUserId = generateUniqueId();
    const userValue = {
        id: uniqueUserId,
        ...body
    };

    try {
        let users = await fsExtra.readJson(usersPath);
        users[uniqueUserId] = userValue;

        await fsExtra.writeJson(usersPath, users);

        // 201 Created
        res.status(201).json(userValue);
    } catch (e) {
        res.status(500).json({});
    }
});

usersRouter.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        let users = await fsExtra.readJson(usersPath);
        const { [id]: removed, ...newStreams } = users;

        await fsExtra.writeJson(usersPath, newStreams);

        res.status(200).json(removed);
    } catch (e) {
        res.status(500).json({});
    }
});

usersRouter.put('/', async (req, res) => {
    const { body } = req;
    const id = body.id;

    try {
        const users = await fsExtra.readJson(usersPath);

        users[id] = { ...users[id], ...body };

        await fsExtra.writeJson(usersPath, users);

        res.status(200).json(users[id]);
    } catch (e) {
        res.status(500).json({});
    }
});
