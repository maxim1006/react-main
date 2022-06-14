import * as express from 'express';
import getRawBody from 'raw-body';
import { family } from '../mocks';
import * as fs from 'fs';
import * as path from 'path';

export const fetchRouter = express.Router();

const events = require('events');

fetchRouter.get('/', (req, res) => {
    // тут делаю небольшую задержку для лоадера и cancel fetch request
    setTimeout(() => {
        res.status(200).json(family);
    }, 1000);
});

fetchRouter.post('/post', async (req, res) => {
    const { body } = req;

    try {
        setTimeout(() => {
            res.status(200).json({ message: 'Hello Max!' });
        }, 1000);
    } catch (e) {
        res.status(500).json({});
    }
});

fetchRouter.post('/canvas', async (req, res) => {
    // обычным способ блоб не получить поэтому использую этот модуль
    let body = await getRawBody(req, {
        limit: '1mb',
    });

    const rootDir = path.dirname(process.mainModule.filename);
    const canvasPath = path.join(rootDir, 'saved');
    // вытаскиваю query из запроса типа http://localhost:3001/api/fetch/canvas?name=asdasd
    const { name } = req.query;

    if (!fs.existsSync(canvasPath)) {
        fs.mkdirSync(canvasPath);
    }

    const canvasFilePath = path.join(rootDir, 'saved', `${name}.png`);

    await fs.createWriteStream(canvasFilePath).write(body);

    try {
        res.status(200).json({ size: body.length });
    } catch (e) {
        res.status(500).json({});
    }
});

// Iframe + form + postMessage with my-iframe.component
const emitter = new events.EventEmitter();

fetchRouter.post('/iframe-form', async (req, res) => {
    const { body } = req; // {name: "Max"}

    emitter.emit('iframeMessage', body);

    res.status(200).json({ form: JSON.stringify(body) });
});

fetchRouter.get('/iframe', async (req, res) => {
    emitter.once('iframeMessage', message => {
        try {
            res.status(200).json({ form: JSON.stringify(message) });
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    });
});
