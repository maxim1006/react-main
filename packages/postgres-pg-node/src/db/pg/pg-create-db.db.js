import { pgPool } from './pg-db.js';

const query = 'DROP DATABASE IF EXISTS pgCreateDb';
const query1 = 'CREATE DATABASE pgCreateDb';

export const pgCreateDb = async () => {
    try {
        await pgPool.query(query);
        const { rows } = await pgPool.query(query1);
        console.log('fetchRows ', JSON.stringify(rows, null, 2));
    } catch (e) {
        console.error(e);
    }
};
