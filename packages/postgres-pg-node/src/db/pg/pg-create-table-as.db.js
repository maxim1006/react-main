import { pgPool } from './pg-db.js';

const DROP_TABLE = 'DROP TABLE IF EXISTS "pgCreateTableAs"';

// тут создастся новая табличка на основе pgCreateTableAs с юзерами у которых email === null
const CREATE_TABLE = `CREATE TABLE IF NOT EXISTS "pgCreateTableAs"
                      (
                          "id"            SERIAL,
                          "name"          VARCHAR(50)    NOT NULL,
                          "surname"       VARCHAR(50)    NOT NULL,
                          "department_id" INTEGER,
                          "email"         VARCHAR(100),
                          "salary"        DECIMAL(15, 2) NOT NULL,
                          PRIMARY KEY ("id")
                      )`;

const INSERT_DATA = `INSERT INTO "pgCreateTableAs"
                         ("name", "surname", "department_id", "email", "salary")
                     VALUES ('John', 'Stewart', 1, 'john@john.com', '3512.00'),
                            ('Kate', 'Lewis', 3, 'john@john.com', '6574.00'),
                            ('Andrew', 'Thompson', NULL, NULL, '2100.00');
`;

const query = `
    CREATE TABLE IF NOT EXISTS "pgCreateTableAs_without_email" AS
    SELECT *
    FROM "pgCreateTableAs"
    WHERE "email" IS NULL;
`;

export const pgCreateTableAs = async () => {
    try {
        await pgPool.query(DROP_TABLE);
        await pgPool.query(CREATE_TABLE);
        await pgPool.query(INSERT_DATA);

        const { rows } = await pgPool.query(query);
        console.log('fetchRows ', JSON.stringify(rows)); // тут не получу ответ, но табличка pgCreateTableAs_without_email создастся
    } catch (e) {
        console.error(e);
    }
};
