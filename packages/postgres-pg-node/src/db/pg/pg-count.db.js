import { pgPool } from './pg-db.js';

const DROP_TABLE = 'DROP TABLE IF EXISTS "pgCount"';

const CREATE_TABLE = `CREATE TABLE IF NOT EXISTS "pgCount"
                      (
                          "id"            SERIAL,
                          "name"          VARCHAR(50)    NOT NULL,
                          "surname"       VARCHAR(50)    NOT NULL,
                          "department_id" INTEGER,
                          "salary"        DECIMAL(15, 2) NOT NULL,
                          PRIMARY KEY ("id")
                      )`;

const INSERT_DATA = `INSERT INTO "pgCount"
                         ("name", "surname", "department_id", "salary")
                     VALUES ('John', 'Stewart', 1, '3512.00'),
                            ('Kate', 'Lewis', 3, '6574.00'),
                            ('Ailisa', 'Gomez', NULL, '6500.00'),
                            ('Gwendolyn', 'James', 2, '4200.00'),
                            ('Andrew', 'Thompson', NULL, '2100.00');
`;
// в саму таблицу колонка salaryInformation не запишется, но вот в запросе вернется
const query = `SELECT COUNT(*) AS "numberOfUsers" FROM "pgCount"`; // [{"numberOfUsers":"5"}]

export const pgCount = async () => {
    try {
        await pgPool.query(DROP_TABLE);
        await pgPool.query(CREATE_TABLE);
        await pgPool.query(INSERT_DATA);

        const { rows } = await pgPool.query(query);
        console.log('fetchRows ', JSON.stringify(rows)); //
    } catch (e) {
        console.error(e);
    }
};
