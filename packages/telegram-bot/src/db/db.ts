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

/* Тут делаю всякие тесты с бд если вдруг хочу узнать какую-то инфо */
async function DBTest() {
    // @ts-ignore
    // const data = await getTodayUserGameStatsByGameType({
    //     username: 'Lili2015',
    //     gameType: MessageEnum.MathGame,
    // });
    // console.log({ data: data });
    // const username = 'maximprosv';
    // await setUser({ username });
    // await addMathGameToUser({ username, game: USER_MATH_GAME_EXAMPLE });
}

void DBTest();
