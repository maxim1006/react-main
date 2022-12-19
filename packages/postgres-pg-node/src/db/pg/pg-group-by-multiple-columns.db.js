import { pgPool } from './pg-db.js';

const DROP_TABLE = 'DROP TABLE IF EXISTS "pgGroupByMultipleColumns"';

const CREATE_TABLE = `CREATE TABLE IF NOT EXISTS "pgGroupByMultipleColumns"
                      (
                          "id"            SERIAL,
                          "name"          VARCHAR(50)    NOT NULL,
                          "surname"       VARCHAR(50)    NOT NULL,
                          "department_id" INTEGER,
                          "salary"        DECIMAL(15, 2) NOT NULL,
                          PRIMARY KEY ("id")
                      );`;

const INSERT_DATA = `INSERT INTO "pgGroupByMultipleColumns"
                         ("name", "surname", "department_id", "salary")
                     VALUES ('John', 'Stewart', 1, '2000.00'),
                            ('Ailisa', 'Lewis', 3, '2000.00'),
                            ('Ailisa', 'Gomez', 3, '3000.00'),
                            ('Simon', 'James', 2, '2000.00'),
                            ('Simon', 'Brown', 3, '2000.00'),
                            ('Simon', 'Collins', 3, '3000.00');
`;

const query = `SELECT "name", "department_id", COUNT(*) AS "peopleWithSameNameInDepartmentsWithSameId"
               FROM "pgGroupByMultipleColumns"
               GROUP BY "name", "department_id"
               ORDER BY "name";`;

export const pgGroupByMultipleColumns = async () => {
    try {
        await pgPool.query(DROP_TABLE);
        await pgPool.query(CREATE_TABLE);
        await pgPool.query(INSERT_DATA);

        const { rows } = await pgPool.query(query);
        console.log('fetchRows ', JSON.stringify(rows)); //  [{"name":"Ailisa","department_id":3,"count":"2"},{"name":"John","department_id":1,"count":"1"},{"name":"Simon","department_id":3,"count":"2"},{"name":"Simon","department_id":2,"count":"1"}]
    } catch (e) {
        console.error(e);
    }
};
