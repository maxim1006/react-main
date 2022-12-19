import { pgPool } from './pg-db.js';

const CREATE_TABLE = `CREATE TABLE "pgInsert"
                      (
                          "id"   SERIAL,
                          "name" VARCHAR(100) NOT NULL,
                          "role" VARCHAR(15)  NOT NULL,
                          PRIMARY KEY ("id")
                      )`;

const INSERT_DATA = `INSERT INTO "pgInsert"
                         ("name", "role")
                     VALUES ('Max', 'father'),
                            ('Aliya', 'mother'),
                            ('Lili', 'daughter');
`;

const query = `INSERT INTO "pgInsert" ("name", "role")
               VALUES ('Alice', 'daughter')`;

export const pgInsert = async () => {
    try {
        await pgPool.query(CREATE_TABLE);
        await pgPool.query(INSERT_DATA);

        const { rows } = await pgPool.query(query);
        console.log('fetchRows ', JSON.stringify(rows, null, 2));
    } catch (e) {
        console.error(e);
    }
};
