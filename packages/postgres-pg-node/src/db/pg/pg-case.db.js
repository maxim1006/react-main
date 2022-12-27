import { pgPool } from './pg-db.js';

const DROP_TABLE = 'DROP TABLE IF EXISTS "pgCase"';

// тут прикольно что строку для формирования UUID нужно писать именно c DEFAULT иначе ошибка в строке формирования id
// тут пример id как UUID
const CREATE_TABLE = `
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE IF NOT EXISTS "pgCase" (
  "id" UUID DEFAULT gen_random_uuid(),
  "name"          VARCHAR(50)    NOT NULL,
  "surname"       VARCHAR(50)    NOT NULL,
  "department_id" BIGINT,
  "salary"        DECIMAL(15, 2) NOT NULL,
  PRIMARY KEY ("id")
)`;

const INSERT_DATA = `INSERT INTO "pgCase"
                         ("name", "surname", "department_id", "salary")
                     VALUES ('John', 'Stewart', 1, '3512.00'),
                            ('Kate', 'Lewis', 3, '6574.00'),
                            ('Ailisa', 'Gomez', NULL, '6500.00'),
                            ('Gwendolyn', 'James', 2, '4200.00'),
                            ('Andrew', 'Thompson', NULL, '2100.00');
`;
// в саму таблицу колонка salaryInformation не запишется, но вот в запросе вернется
const query = `
    SELECT "name", "salary",
           CASE
               WHEN "salary" > 6000 THEN 'Salary greater than 6000$'
               WHEN "salary" > 4000 THEN 'Salary greater than 4000$'
               WHEN "salary" >= 2000 THEN 'Salary greater than 2000$'
               ELSE 'Salary less than 2000$'
               END AS "salaryInformation"
    FROM "pgCase";`;

export const pgCase = async () => {
    try {
        await pgPool.query(DROP_TABLE);
        await pgPool.query(CREATE_TABLE);
        await pgPool.query(INSERT_DATA);

        const { rows } = await pgPool.query(query);
        console.log('fetchRows ', JSON.stringify(rows, null, 2));
    } catch (e) {
        console.error(e);
    }
};
