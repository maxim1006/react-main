import { pgPool } from './pg-db.js';

const DROP_TABLE = 'DROP TABLE IF EXISTS "pgSum"';

// NUMERIC(precision, scale) ex.: number 23.5141 has a precision of 6 and a scale of 4
const CREATE_TABLE = `CREATE TABLE "pgSum"
                      (
                          "id"            SERIAL         NOT NULL,
                          "name"          VARCHAR(50)    NOT NULL,
                          "surname"       VARCHAR(50)    NOT NULL,
                          "department_id" INTEGER NULL,
                          "salary"        DECIMAL(15, 2) NOT NULL,
                          PRIMARY KEY ("id")
                      );`;

const INSERT_DATA = `INSERT INTO "pgSum"
                         ("name", "surname", "department_id", "salary")
                     VALUES ('John', 'Stewart', 1, '3512.00'),
                            ('Chris', 'Brown', 2, '1344.00'),
                            ('Kate', 'Lewis', 3, '6574.00'),
                            ('Ailisa', 'Gomez', NULL, '6500.00'),
                            ('Gwendolyn', 'James', 2, '4200.00'),
                            ('Simon', 'Collins', 4, '3320.00'),
                            ('Taylor', 'Martin', 2, '1500.00'),
                            ('Andrew', 'Thompson', NULL, '2100.00');
`;

const query = `SELECT SUM("salary") AS "salary_sum" FROM "pgSum"`;

export const pgSum = async () => {
    try {
        await pgPool.query(DROP_TABLE);
        await pgPool.query(CREATE_TABLE);
        await pgPool.query(INSERT_DATA);

        const { rows } = await pgPool.query(query);
        console.log('fetchRows ', JSON.stringify(rows)); //  [{"salary_sum":"29050.00"}]
    } catch (e) {
        console.error(e);
    }
};
