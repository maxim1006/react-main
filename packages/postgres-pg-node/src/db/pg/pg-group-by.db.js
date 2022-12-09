import { pgPool } from './pg-db.js';

const CREATE_TABLE = `CREATE TABLE IF NOT EXISTS "pgGroupBy"
                      (
                          "id"      SERIAL,
                          "name"    VARCHAR(100) NOT NULL,
                          "country" VARCHAR(15)  NOT NULL,
                          PRIMARY KEY ("id")
                      );`;

const INSERT_DATA = `INSERT INTO "pgGroupBy"
                         ("name", "country")
                     VALUES ('Tom', 'Poland'),
                            ('Chris', 'Spain'),
                            ('Jack', 'Spain'),
                            ('Kim', 'Vietnam'),
                            ('Marco', 'Italy'),
                            ('Kate', 'Spain'),
                            ('Nam', 'Vietnam');
`;

const query = `SELECT COUNT("id") AS "number of pgGroupBy", "country"
               FROM "pgGroupBy"
               GROUP BY "country"
               ORDER BY COUNT("id") DESC;`;

export const pgGroupBy = async () => {
    try {
        await pgPool.query(CREATE_TABLE);
        await pgPool.query(INSERT_DATA);

        const { rows } = await pgPool.query(query);
        console.log('fetchRows ', JSON.stringify(rows)); //   [{"number of pgGroupBy":"3","country":"Spain"},{"number of pgGroupBy":"2","country":"Vietnam"},{"number of pgGroupBy":"1","country":"Italy"},{"number of pgGroupBy":"1","country":"Poland"}]
    } catch (e) {
        console.error(e);
    }
};
