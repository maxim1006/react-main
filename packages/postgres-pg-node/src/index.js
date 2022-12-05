import express from 'express';
import bodyParser from 'body-parser';
import { usersRouter } from './routes/users.routes.js';
import { postsRouter } from './routes/posts.routes.js';
import './db/sequelize/sequelize-db.js';
import { syncSequelizeDb } from './db/sequelize/sequelize-db.js';
import { associateModels } from './models/association.model.js';
import { IS_PG } from './constants/common.constants.js';

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

if (!IS_PG) {
    // синхронизирую ассоциации
    associateModels();
    // синхронизирую базу данных после роутов, чтобы модели подтянулись
    void syncSequelizeDb();
}

app.listen(port, () => {
    console.log(`App running on port http://localhost:${port}.`);
});
