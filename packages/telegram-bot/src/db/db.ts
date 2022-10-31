// это аля симуляция БД
import { ChatDbModel } from '../models/chat-db.model';
import path from 'path';
import admin from 'firebase-admin';

const serviceAccount = require(path.resolve(
    __dirname,
    '../admin/maximprosvbot-firebase-adminsdk-swfzd-59fe47ec1d.json'
));

const app = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

export const DB = app.firestore();

async function DBTest() {
    // const userName = 'maximprosv';
    // await setUser({ userName, firstName: 'Max' });
    // await addMathGameToUser({ userName, game: USER_MATH_GAME_EXAMPLE });
}

void DBTest();

export const CHATS_DB: Record<string, ChatDbModel> = {};
