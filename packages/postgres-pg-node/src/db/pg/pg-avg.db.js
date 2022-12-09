import { pgPool } from './pg-db.js';

const CREATE_TABLE = `CREATE TABLE IF NOT EXISTS "pgAvg"
                      (
                          "id"            SERIAL,
                          "name"          VARCHAR(50)    NOT NULL,
                          "surname"       VARCHAR(50)    NOT NULL,
                          "department_id" INTEGER,
                          "salary"        DECIMAL(15, 2) NOT NULL,
                          PRIMARY KEY ("id")
                      )`;

const INSERT_DATA = `INSERT INTO "pgAvg"
                         ("name", "surname", "department_id", "salary")
                     VALUES ('John', 'Stewart', 1, '3512.00'),
                            ('Kate', 'Lewis', 3, '6574.00'),
                            ('Ailisa', 'Gomez', NULL, '6500.00'),
                            ('Gwendolyn', 'James', 2, '4200.00'),
                            ('Andrew', 'Thompson', NULL, '2100.00');
`;

const query = 'SELECT AVG("salary") FROM "pgAvg"';
const query1 = `SELECT * FROM "pgAvg" WHERE "salary" < (SELECT AVG("salary") FROM "pgAvg")`;

export const pgAvg = async (pageNumber = 1, pageSize = 3) => {
    try {
        await pgPool.query(CREATE_TABLE);
        await pgPool.query(INSERT_DATA);

        const { rows } = await pgPool.query(query);
        const { rows: rows1 } = await pgPool.query(query1);
        console.log('fetchRows ', JSON.stringify(rows, null, 2));
        console.log('fetchRows1 ', JSON.stringify(rows1, null, 2));
    } catch (e) {
        console.error(e);
    }
};
