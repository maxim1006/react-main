import pg from 'pg';

// connect to db
const Pool = pg.Pool;

export const pool = new Pool({
    user: 'me',
    host: 'localhost',
    database: 'api',
    password: 'password',
    port: 5432,
});
