import { pgPool } from './pg-db.js';

const query = 'CREATE DATABASE pgDropDb';
// тут прикольно что никто не должен быть приконнекчен (к примеру pgAdmin к этой бд)
const query1 = 'DROP DATABASE IF EXISTS pgDropDb';

export const pgDropDb = async () => {
    try {
        await pgPool.query(query);
        const { rows } = await pgPool.query(query1);
        console.log('fetchRows ', JSON.stringify(rows, null, 2));
    } catch (e) {
        console.error(e);
    }
};
