import { pool } from './db.js';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3124;

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' });
});

app.listen(port, () => {
    console.log(`App running on port http://localhost:${port}.`);
});
