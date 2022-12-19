import pg from 'pg';
import { pgAlter } from './pg-alter.db.js';
import { pgRound } from './pg-round.db.js';
import { pgSelectDistinct } from './pg-select-distinct.db.js';
import { pgSum } from './pg-sum.db.js';
import { pgUpper } from './pg-upper.db.js';
import { pgUpdateQuery } from './pg-update-query.db.js';
import { pgDelete } from './pg-delete.db.js';
import { pgWhere } from './pg-where.db.js';

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
    void pgWhere();
};
