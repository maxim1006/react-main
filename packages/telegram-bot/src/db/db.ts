import path from 'path';
import admin from 'firebase-admin';
import { getUserGameStatsByGameType } from './user.db';
import { MessageEnum } from '../models/message.model';

const serviceAccount = require(path.resolve(
    __dirname,
    '../admin/maximprosvbot-firebase-adminsdk-swfzd-59fe47ec1d.json'
));

const app = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

export const DB = app.firestore();

async function DBTest() {
    await getUserGameStatsByGameType({ firstName: 'maximprosv', gameType: MessageEnum.MathGame });
    // const firstName = 'maximprosv';
    // await setUser({ firstName });
    // await addMathGameToUser({ firstName, game: USER_MATH_GAME_EXAMPLE });
}

void DBTest();
