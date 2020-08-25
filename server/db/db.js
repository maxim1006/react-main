import mongoose from 'mongoose';
import { createDoors } from './models/doors';
import { config as dotenvConfig } from 'dotenv';

dotenvConfig();

// подключаюсь к базе данных, если ее нет создасться на лету
mongoose.connect('mongodb://localhost:27017/reactDB', { useNewUrlParser: true, useUnifiedTopology: true }).then(
    () => {
        console.log('mongodb://localhost:27017/reactDB succeed');
    },
    () => {
        console.log('mongodb://localhost:27017/reactDB error');
    }
);

const db = mongoose.connection;

// закомментировал чтобы не захломляло лог
// db.on('error', e => console.error('connection error ', e));
db.once('open', e => console.log('Database reactDB connected on port 27017'));

// для примера создаю коллекцию дверей
// предварительно проверив что дверей еще нет, если есть то не создаю
createDoors();
