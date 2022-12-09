import pg from 'pg';
import { pgHaving } from './pg-having.db.js';
import { pgInnerJoinDb } from './pg-inner-join.db.js';

// connect to db
const PgPool = pg.Pool;

export const pgPool = new PgPool({
    user: 'me',
    host: 'localhost',
    database: 'api',
    password: 'password',
    port: 5432,
});

export const startPg = async () => {
    // create Tables
    // try {
    //     await pgPool.query(DB_CREATE_USERS_TABLE);
    //     await pgPool.query(DB_CREATE_POSTS_TABLE);
    // } catch (e) {
    //     console.error('startPg create Tables error ', e);
    // }

    void pgInnerJoinDb();
};
