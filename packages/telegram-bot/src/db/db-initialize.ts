import path from 'path';
import admin from 'firebase-admin';

const serviceAccount = require(path.resolve(
    __dirname,
    '../maximprosvbot-firebase-adminsdk-swfzd-59fe47ec1d.json'
));

const app = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

export const DB = app.firestore();
