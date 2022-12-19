import { pgPool } from './pg-db.js';

const DROP_TABLE = 'DROP TABLE IF EXISTS "pgSelectDistinct"';

const CREATE_TABLE = `CREATE TABLE IF NOT EXISTS "pgSelectDistinct"
                      (
                          "id"            SERIAL,
                          "name"          VARCHAR(50)    NOT NULL,
                          "country"       VARCHAR(50)    NOT NULL,
                          PRIMARY KEY ("id")
                      )`;

const INSERT_DATA = `INSERT INTO "pgSelectDistinct"
                         ("name", "country")
                     VALUES ('Tom', 'Poland'),
                            ('Chris', 'Spain'),
                            ('Jack', 'Spain'),
                            ('Kim', 'Vietnam'),
                            ('Marco', 'Italy'),
                            ('Kate', 'Spain'),
                            ('Nam', 'Vietnam');
`;

// выберет уникальные страны
const query = `SELECT DISTINCT "country" FROM "pgSelectDistinct"`;

export const pgSelectDistinct = async () => {
    try {
        await pgPool.query(DROP_TABLE);
        await pgPool.query(CREATE_TABLE);
        await pgPool.query(INSERT_DATA);

        const { rows } = await pgPool.query(query);
        console.log('fetchRows ', JSON.stringify(rows)); // [{"country":"Spain"},{"country":"Italy"},{"country":"Vietnam"},{"country":"Poland"}]
    } catch (e) {
        console.error(e);
    }
};
