import express from 'express';
import bodyParser from 'body-parser';
import { usersRouter } from './routes/users.routes.js';
import { postsRouter } from './routes/posts.routes.js';

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

[usersRouter, postsRouter].forEach(i => app.use('/api', i));

app.listen(port, () => {
    console.log(`App running on port http://localhost:${port}.`);
});
