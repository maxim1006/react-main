import { pgPool } from './pg-db.js';

const DROP_TABLE = 'DROP TABLE IF EXISTS "pgCreateTable"';

const query = `CREATE TABLE IF NOT EXISTS "pgCreateTable" (
    "id" SERIAL,
    "name" VARCHAR(100) NOT NULL,
    "role" VARCHAR(15) NOT NULL,
    PRIMARY KEY ("id")
)`;

export const pgCreateTable = async () => {
    try {
        await pgPool.query(DROP_TABLE);
        const { rows } = await pgPool.query(query);
        console.log('fetchRows ', JSON.stringify(rows, null, 2));
    } catch (e) {
        console.error(e);
    }
};
