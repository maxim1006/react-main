import pg from 'pg';

// connect to db
const PgPool = pg.Pool;

export const pgPool = new PgPool({
    user: 'me',
    host: 'localhost',
    database: 'api',
    password: 'password',
    port: 5432,
});
