import { pgPool } from './pg-db.js';

// меняю тип у колонки salary
const CREATE_TABLE = `CREATE TABLE IF NOT EXISTS "pgAlterTableAlterColumn"
                      (
                          "id"            SERIAL,
                          "name"          VARCHAR(50)    NOT NULL,
                          "surname"       VARCHAR(50)    NOT NULL,
                          "department_id" INTEGER,
                          "salary"        DECIMAL(15, 2) NOT NULL,
                          PRIMARY KEY ("id")
                      )`;

const INSERT_DATA = `INSERT INTO "pgAlterTableAlterColumn"
                         ("name", "surname", "department_id", "salary")
                     VALUES ('John', 'Stewart', 1, '3512.00'),
                            ('Kate', 'Lewis', 3, '6574.00'),
                            ('Ailisa', 'Gomez', NULL, '6500.00'),
                            ('Gwendolyn', 'James', 2, '4200.00'),
                            ('Andrew', 'Thompson', NULL, '2100.00');
`;

// меняю тип колонки на VARCHAR
const query = `ALTER TABLE "pgAlterTableAlterColumn"
               ALTER COLUMN "salary" TYPE VARCHAR;`;

export const pgAlterTableAlterColumn = async () => {
    try {
        await pgPool.query(CREATE_TABLE);
        await pgPool.query(INSERT_DATA);

        const { rows } = await pgPool.query(query);
        console.log('fetchRows ', JSON.stringify(rows, null, 2));
    } catch (e) {
        console.error(e);
    }
};
