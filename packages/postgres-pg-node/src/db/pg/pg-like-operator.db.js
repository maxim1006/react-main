import { pgPool } from './pg-db.js';

const DROP_TABLE = 'DROP TABLE IF EXISTS "pgLikeOperator"';

const CREATE_TABLE = `CREATE TABLE IF NOT EXISTS "pgLikeOperator"
                      (
                          "id"            SERIAL,
                          "name"          VARCHAR(50)    NOT NULL,
                          "surname"       VARCHAR(50)    NOT NULL,
                          "department_id" INTEGER,
                          "salary"        DECIMAL(15, 2) NOT NULL,
                          PRIMARY KEY ("id")
                      )`;

const INSERT_DATA = `INSERT INTO "pgLikeOperator"
                         ("name", "surname", "department_id", "salary")
                     VALUES ('John', 'Stewart', 1, '3512.00'),
                            ('Kate', 'Lewis', 3, '6574.00'),
                            ('Ailisa', 'Gomez', NULL, '6500.00'),
                            ('Gwendolyn', 'James', 2, '4200.00'),
                            ('Andrew', 'Thompson', NULL, '2100.00');
`;

const query = `SELECT * FROM "pgLikeOperator"
               WHERE  "name"  LIKE 'A%';`;

export const pgLikeOperator = async () => {
    try {
        await pgPool.query(DROP_TABLE);
        await pgPool.query(CREATE_TABLE);
        await pgPool.query(INSERT_DATA);

        const { rows } = await pgPool.query(query);
        console.log('fetchRows ', JSON.stringify(rows)); // [{"id":3,"name":"Ailisa","surname":"Gomez","department_id":null,"salary":"6500.00"},{"id":5,"name":"Andrew","surname":"Thompson","department_id":null,"salary":"2100.00"}]
    } catch (e) {
        console.error(e);
    }
};
