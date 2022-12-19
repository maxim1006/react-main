import { pgPool } from './pg-db.js';

const CREATE_TABLE = `CREATE TABLE IF NOT EXISTS "pgMaxMin"
                      (
                          "id"            SERIAL,
                          "name"          VARCHAR(50)    NOT NULL,
                          "surname"       VARCHAR(50)    NOT NULL,
                          "department_id" INTEGER,
                          "salary"        DECIMAL(15, 2) NOT NULL,
                          PRIMARY KEY ("id")
                      )`;

const INSERT_DATA = `INSERT INTO "pgMaxMin"
                         ("name", "surname", "department_id", "salary")
                     VALUES ('John', 'Stewart', 1, '3512.00'),
                            ('Kate', 'Lewis', 3, '6574.00'),
                            ('Ailisa', 'Gomez', NULL, '6500.00'),
                            ('Gwendolyn', 'James', 2, '4200.00'),
                            ('Andrew', 'Thompson', NULL, '2100.00');
`;

const query = `SELECT
               MAX("salary") AS "maximum salary",
               MIN("salary") AS "minimum salary"
               FROM "pgMaxMin";`;

export const pgMaxMin = async () => {
    try {
        await pgPool.query(CREATE_TABLE);
        await pgPool.query(INSERT_DATA);

        const { rows } = await pgPool.query(query);
        console.log('fetchRows ', JSON.stringify(rows)); //  [{"maximum salary":"6574.00","minimum salary":"2100.00"}]
    } catch (e) {
        console.error(e);
    }
};
