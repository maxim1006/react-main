import { pgPool } from './pg-db.js';

const DROP_TABLE = 'DROP TABLE IF EXISTS "pgFullJoin"';
const DROP_TABLE1 = 'DROP TABLE IF EXISTS "pgFullJoinDepartments"';

// добавляю email колонку в табличку
const CREATE_TABLE = `CREATE TABLE IF NOT EXISTS "pgFullJoin"
                      (
                          "id"            SERIAL,
                          "name"          VARCHAR(50)    NOT NULL,
                          "surname"       VARCHAR(50)    NOT NULL,
                          "department_id" INTEGER,
                          "salary"        DECIMAL(15, 2) NOT NULL,
                          PRIMARY KEY ("id")
                      )`;

const CREATE_TABLE1 = `CREATE TABLE IF NOT EXISTS "pgFullJoinDepartments"
                       (
                           "id"              SERIAL,
                           "department_name" VARCHAR(50) NOT NULL,
                           "location"        VARCHAR(50) NULL,
                           PRIMARY KEY ("id")
                       );`;

const INSERT_DATA = `INSERT INTO "pgFullJoin"
                         ("name", "surname", "department_id", "salary")
                     VALUES ('John', 'Stewart', 1, '3512.00'),
                            ('Kate', 'Lewis', 2, '6574.00'),
                            ('Ailisa', 'Gomez', 3, '6500.00'),
                            ('Gwendolyn', 'James', 4, '4200.00'),
                            ('Andrew', 'Thompson', 5, '2100.00');
`;

const INSERT_DATA1 = `INSERT INTO "pgFullJoinDepartments"
                          ("id", "department_name", "location")
                      VALUES (1, 'Sales', 'New York'),
                             (2, 'Finance', NULL),
                             (3, 'HR', 'Atlanta');
`;

const query = `SELECT *
               FROM "pgFullJoin"
               FULL OUTER JOIN "pgFullJoinDepartments" ON "pgFullJoinDepartments"."id" = "pgFullJoin"."department_id"`;

export const pgFullJoinDb = async () => {
    try {
        await pgPool.query(DROP_TABLE);
        await pgPool.query(DROP_TABLE1);
        await pgPool.query(CREATE_TABLE);
        await pgPool.query(CREATE_TABLE1);
        await pgPool.query(INSERT_DATA);
        await pgPool.query(INSERT_DATA1);

        const { rows } = await pgPool.query(query);
        console.log('fetchRows ', JSON.stringify(rows)); // физически таблицы не смержатся но в запросе придет
        //[{"id":1,"name":"John","surname":"Stewart","department_id":1,"salary":"3512.00","department_name":"Sales","location":"New York"},..., все чего не хватает будет NULL
    } catch (e) {
        console.error(e);
    }
};
