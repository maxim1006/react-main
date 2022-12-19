import { pgPool } from './pg-db.js';

const DROP_TABLE = 'DROP TABLE IF EXISTS "pgDelete"';

const CREATE_TABLE = `CREATE TABLE IF NOT EXISTS "pgDelete"
                      (
                          "id"            SERIAL,
                          "name"          VARCHAR(50)    NOT NULL,
                          "surname"       VARCHAR(50)    NOT NULL,
                          "department_id" INTEGER,
                          "salary"        DECIMAL(15, 2) NOT NULL,
                          PRIMARY KEY ("id")
                      )`;

const INSERT_DATA = `INSERT INTO "pgDelete"
                         ("name", "surname", "department_id", "salary")
                     VALUES ('John', 'Stewart', 1, '3512.00'),
                            ('Kate', 'Lewis', 3, '6574.00'),
                            ('Ailisa', 'Gomez', NULL, '6500.00'),
                            ('Gwendolyn', 'James', 2, '4200.00'),
                            ('Andrew', 'Thompson', NULL, '2100.00');
`;

const query = 'DELETE FROM "pgDelete" WHERE "name" = $1 RETURNING *';
const query1 = 'SELECT * FROM "pgDelete"';

// удаляю строку
export const pgDelete = async (userName = 'John') => {
    try {
        await pgPool.query(DROP_TABLE);
        await pgPool.query(CREATE_TABLE);
        await pgPool.query(INSERT_DATA);

        const { rows } = await pgPool.query(query, [userName]);
        console.log('fetchRows ', JSON.stringify(rows)); // [{"id":1,"name":"John","surname":"Stewart","department_id":1,"salary":"3512.00"}]

        const { rows: rows1 } = await pgPool.query(query1);
        console.log('fetchRows ', JSON.stringify(rows1)); // [{"id":2,"name":"Kate","surname":"Lewis","department_id":3,"salary":"6574.00"},{"id":3,"name":"Ailisa","surname":"Gomez","department_id":null,"salary":"6500.00"},{"id":4,"name":"Gwendolyn","surname":"James","department_id":2,"salary":"4200.00"},{"id":5,"name":"Andrew","surname":"Thompson","department_id":null,"salary":"2100.00"}]
    } catch (e) {
        console.error(e);
    }
};
