import { pgPool } from './pg-db.js';

const DROP_TABLE = 'DROP TABLE IF EXISTS "pgHaving"';

const CREATE_TABLE = `CREATE TABLE IF NOT EXISTS "pgHaving"
                      (
                          "id"      SERIAL,
                          "name"    VARCHAR(100) NOT NULL,
                          "country" VARCHAR(15)  NOT NULL,
                          PRIMARY KEY ("id")
                      );`;

const INSERT_DATA = `INSERT INTO "pgHaving"
                         ("name", "country")
                     VALUES ('Tom', 'Poland'),
                            ('Chris', 'Spain'),
                            ('Jack', 'Spain'),
                            ('Kim', 'Vietnam'),
                            ('Marco', 'Italy'),
                            ('Kate', 'Spain'),
                            ('Nam', 'Vietnam');
`;

const query = `SELECT COUNT("id") AS "number of pgHaving", "country"
               FROM "pgHaving"
               GROUP BY "country"
               HAVING COUNT("id") >= $1;`;

export const pgHaving = async (min = 2) => {
    try {
        await pgPool.query(DROP_TABLE);
        await pgPool.query(CREATE_TABLE);
        await pgPool.query(INSERT_DATA);

        const { rows } = await pgPool.query(query, [min]);
        console.log('fetchRows ', JSON.stringify(rows)); // [{"number of pgHaving":"3","country":"Spain"},{"number of pgHaving":"2","country":"Vietnam"}]
    } catch (e) {
        console.error(e);
    }
};
