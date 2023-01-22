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
    //     firstName: 'Lili2015',
    //     gameType: MessageEnum.MathGame,
    // });
    // console.log({ data: data });
    // const firstName = 'maximprosv';
    // await setUser({ firstName });
    // await addMathGameToUser({ firstName, game: USER_MATH_GAME_EXAMPLE });
}

void DBTest();
