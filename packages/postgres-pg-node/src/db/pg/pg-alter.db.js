import { pgPool } from './pg-db.js';

const DROP_TABLE = 'DROP TABLE IF EXISTS "pgAlter"';

const CREATE_TABLE = `CREATE TABLE IF NOT EXISTS "pgAlter"
                      (
                          "id"            SERIAL,
                          "name"          VARCHAR(50)    NOT NULL,
                          "surname"       VARCHAR(50)    NOT NULL,
                          "department_id" INTEGER,
                          "salary"        DECIMAL(15, 2) NOT NULL,
                          PRIMARY KEY ("id")
                      )`;

const INSERT_DATA = `INSERT INTO "pgAlter"
                         ("name", "surname", "department_id", "salary")
                     VALUES ('John', 'Stewart', 1, '3512.00'),
                            ('Kate', 'Lewis', 3, '6574.00'),
                            ('Ailisa', 'Gomez', NULL, '6500.00'),
                            ('Gwendolyn', 'James', 2, '4200.00'),
                            ('Andrew', 'Thompson', NULL, '2100.00');
`;

// меняю имя и тип у колонки salary на VARCHAR (не получилось сделать в 1 колонке)
const query = `ALTER TABLE "pgAlter"
               ALTER COLUMN "salary" TYPE VARCHAR`;

const query1 = `ALTER TABLE "pgAlter"
               RENAME COLUMN "salary" TO "earnings"`;

// добавляю колонку
const query2 = `ALTER TABLE "pgAlter"
				ADD IF NOT EXISTS "email" VARCHAR(255);`;

const query3 = `SELECT * from "pgAlter"`;

export const pgAlter = async () => {
    try {
        await pgPool.query(DROP_TABLE);
        await pgPool.query(CREATE_TABLE);
        await pgPool.query(INSERT_DATA);

        await pgPool.query(query);
        await pgPool.query(query1);
        await pgPool.query(query2);
        const { rows } = await pgPool.query(query3);
        console.log('fetchRows ', JSON.stringify(rows));
    } catch (e) {
        console.error(e);
    }
};
