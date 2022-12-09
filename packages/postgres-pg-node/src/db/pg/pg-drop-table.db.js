import { pgPool } from './pg-db.js';

const query = `CREATE TABLE IF NOT EXISTS "pgDropTable" (
    "id" SERIAL,
    "name" VARCHAR(100) NOT NULL,
    "role" VARCHAR(15) NOT NULL,
    PRIMARY KEY ("id")
)`;

const query1 = `DROP TABLE IF EXISTS "pgDropTable"`;

export const pgDropTable = async () => {
    try {
        await pgPool.query(query);
        const { rows } = await pgPool.query(query1);
        console.log('fetchRows ', JSON.stringify(rows, null, 2));
    } catch (e) {
        console.error(e);
    }
};
