import { pgPool } from './pg-db.js';

const DROP_TABLE = 'DROP TABLE IF EXISTS "pgWhere"';

const CREATE_TABLE = `CREATE TABLE "pgWhere"
                      (
                          "id"   SERIAL,
                          "name" VARCHAR(100) NOT NULL,
                          "role" VARCHAR(15)  NOT NULL,
                          PRIMARY KEY ("id")
                      );`;

const INSERT_DATA = `INSERT INTO "pgWhere"
                         ("name", "role")
                     VALUES ('John', 'admin'),
                            ('Chris', 'moderator'),
                            ('Kate', 'user'),
                            ('Denis', 'moderator');
`;

const query = `SELECT *
               FROM "pgWhere"
               WHERE "name" = $1 OR "role" = $2`;

export const pgWhere = async (userName = 'Chris', userRole = 'admin') => {
    try {
        await pgPool.query(DROP_TABLE);
        await pgPool.query(CREATE_TABLE);
        await pgPool.query(INSERT_DATA);

        const { rows } = await pgPool.query(query, [userName, userRole]);
        console.log('fetchRows ', JSON.stringify(rows)); //  [{"id":1,"name":"John","role":"admin"},{"id":2,"name":"Chris","role":"moderator"}]
    } catch (e) {
        console.error(e);
    }
};
