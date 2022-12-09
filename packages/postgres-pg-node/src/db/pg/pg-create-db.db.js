import { pgPool } from './pg-db.js';

const query = 'CREATE DATABASE pgCreateDb';

export const pgCreateDb = async () => {
    try {
        const { rows } = await pgPool.query(query);
        console.log('fetchRows ', JSON.stringify(rows, null, 2));
    } catch (e) {
        console.error(e);
    }
};
