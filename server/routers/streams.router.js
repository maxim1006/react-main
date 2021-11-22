import * as express from 'express';
import * as fsExtra from 'fs-extra';
import * as path from 'path';
import { generateUniqueId } from '../helpers/helpers';

const rootDir = path.dirname(process.mainModule.filename);
const streamsPath = path.join(rootDir, 'data', 'streams.json');

// CRUD	HTTP
// Create - POST
// Read -	GET
// Update -	PUT
// Delete -	DELETE

export const streamsRouter = express.Router();

streamsRouter.get('/', async (req, res) => {
    try {
        let streams = await fsExtra.readJson(streamsPath);

        res.status(200).json(streams);
    } catch (e) {
        res.status(500).json({});
    }
});

streamsRouter.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        let streams = await fsExtra.readJson(streamsPath);

        setTimeout(() => {
            res.status(200).json(streams[id]);
        }, 2000);
    } catch (e) {
        res.status(500).json({});
    }
});

streamsRouter.post('/', async (req, res) => {
    const { body } = req;
    const uniqueStreamId = generateUniqueId();
    const streamValue = {
        id: uniqueStreamId,
        ...body
    };

    try {
        let streams = await fsExtra.readJson(streamsPath);
        streams[uniqueStreamId] = streamValue;

        await fsExtra.writeJson(streamsPath, streams);

        // 201 Created
        res.status(201).json(streamValue);
    } catch (e) {
        res.status(500).json({});
    }
});

streamsRouter.delete('/', async (req, res) => {
    const { id } = req.query;

    try {
        let streams = await fsExtra.readJson(streamsPath);
        const { [id]: removed, ...newStreams } = streams;

        await fsExtra.writeJson(streamsPath, newStreams);

        res.status(200).json(removed);
    } catch (e) {
        res.status(500).json({});
    }
});

streamsRouter.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const streams = await fsExtra.readJson(streamsPath);

        streams[id] = { ...streams[id], ...body };

        await fsExtra.writeJson(streamsPath, streams);

        res.status(200).json(streams[id]);
    } catch (e) {
        res.status(500).json({});
    }
});
