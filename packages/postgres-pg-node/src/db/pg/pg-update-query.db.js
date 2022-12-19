import { pgPool } from './pg-db.js';

const DROP_TABLE = 'DROP TABLE IF EXISTS "pgUpdateQuery"';

const CREATE_TABLE = `CREATE TABLE "pgUpdateQuery"
                      (
                          "id"   SERIAL,
                          "name" VARCHAR(100) NOT NULL,
                          "role" VARCHAR(15)  NOT NULL,
                          PRIMARY KEY ("id")
                      );`;

const INSERT_DATA = `INSERT INTO "pgUpdateQuery"
                         ("name", "role")
                     VALUES ('John', 'admin'),
                            ('Chris', 'moderator'),
                            ('Kate', 'user'),
                            ('Denis', 'moderator');
`;

const query = `UPDATE "pgUpdateQuery"
               SET "name" = $1, "role" = $2
               WHERE "id" = $3 RETURNING *`;

export const pgUpdateQuery = async (userName = 'Max', userRole = 'best', userId = '1') => {
    try {
        await pgPool.query(DROP_TABLE);
        await pgPool.query(CREATE_TABLE);
        await pgPool.query(INSERT_DATA);

        const { rows } = await pgPool.query(query, [userName, userRole, userId]);
        console.log('fetchRows ', JSON.stringify(rows)); // [{"id":1,"name":"Max","role":"best"}]
    } catch (e) {
        console.error(e);
    }
};
