import * as express from "express";
import {uniqueId} from "lodash";

let streams = {};

export const streamsRouter = express.Router();

streamsRouter.post('/', (req, res) => {
    const {body} = req;
    const uniqueStreamId = uniqueId("stream_");
    const streamValue = {
        id: uniqueStreamId,
        ...body
    };
    const stream = {
        [uniqueStreamId]: streamValue
    };

    streams[uniqueStreamId] = streamValue;

    // 201 Created
    res.status(201).json(stream);
});

streamsRouter.get('/', (req, res) => {
    res.status(200).json(streams);
});

streamsRouter.delete('/', (req, res) => {
    const {id} = req.query;
    const {[id]: removed, ...newStreams} = streams;

    streams = {...newStreams};

    res.status(200).json(removed);
});

