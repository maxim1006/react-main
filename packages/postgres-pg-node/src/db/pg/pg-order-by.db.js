import { pgPool } from './pg-db.js';

const DROP_TABLE = 'DROP TABLE IF EXISTS "pgOrderBy"';

const CREATE_TABLE = `CREATE TABLE IF NOT EXISTS "pgOrderBy"
                      (
                          "id"   SERIAL,
                          "name" VARCHAR(100) NOT NULL,
                          "role" VARCHAR(15)  NOT NULL,
                          PRIMARY KEY ("id")
                      )`;

const INSERT_DATA = `INSERT INTO "pgOrderBy"
                         ("name", "role")
                     VALUES ('Max', 'father'),
                            ('Aliya', 'mother'),
                            ('Lili', 'daughter');
`;

export const pgOrderBy = async (orderBy = 'id') => {
    try {
        await pgPool.query(DROP_TABLE);
        await pgPool.query(CREATE_TABLE);
        await pgPool.query(INSERT_DATA);

        const query = `SELECT * FROM "pgOrderBy" ORDER BY ${orderBy} DESC`;

        // тут самое интересное что если добавить orderBy как переменную в query через pgPool.query(query, [orderBy]) то сортировка не отработает
        const res = await pgPool.query(query);
        console.log('fetchRows ', JSON.stringify(res.rows)); // [{"id":3,"name":"Lili","role":"daughter"},{"id":2,"name":"Aliya","role":"mother"},{"id":1,"name":"Max","role":"father"}]
    } catch (e) {
        console.error(e);
    }
};
