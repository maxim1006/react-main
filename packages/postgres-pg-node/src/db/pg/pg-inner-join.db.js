import { pgPool } from './pg-db.js';

const DROP_TABLE = 'DROP TABLE IF EXISTS "pgInnerJoin"';

const DROP_TABLE1 = 'DROP TABLE IF EXISTS "pgInnerJoinDepartments"';

// Замучался но, при JOIN в случае если не будет у pgInnerJoinDepartments хватать id для department_id из pgInnerJoin то будет ошибка, idшники обязательно должны соответствовать (всего 3 департамента и не может быть user из 4го)
const CREATE_TABLE = `CREATE TABLE IF NOT EXISTS "pgInnerJoin"
                      (
                          "id"            SERIAL,
                          "name"          VARCHAR(50) NOT NULL,
                          "surname"       VARCHAR(50) NOT NULL,
                          "department_id" INTEGER,
                          PRIMARY KEY ("id"),
                          FOREIGN KEY ("department_id") REFERENCES "pgInnerJoinDepartments" ("id")
                      );`;

const CREATE_TABLE1 = `CREATE TABLE IF NOT EXISTS "pgInnerJoinDepartments"
                       (
                           "id"              SERIAL,
                           "department_name" VARCHAR(50) NOT NULL,
                           "location"        VARCHAR(50) NULL,
                           PRIMARY KEY ("id")
                       );`;

const INSERT_DATA = `INSERT INTO "pgInnerJoin"
                         ("name", "surname", "department_id")
                     VALUES
                         ('John', 'Stewart', 1),
                         ('Kate', 'Lewis', 2),
                         ('Ailisa', 'Gomez', 3),
                         ('Gwendolyn', 'James', 2),
                         ('Andrew', 'Thompson', 3);
`;

const INSERT_DATA1 = `INSERT INTO "pgInnerJoinDepartments"
                          ("id", "department_name", "location")
                      VALUES
                          (1, 'Sales', 'New York'),
                          (2, 'Finance', NULL),
                          (3, 'HR', 'Atlanta');
`;

const query = `SELECT *
               FROM "pgInnerJoin"
               JOIN "pgInnerJoinDepartments" ON "pgInnerJoinDepartments"."id" = "pgInnerJoin"."department_id"`;

export const pgInnerJoinDb = async () => {
    try {
        await pgPool.query(DROP_TABLE);
        await pgPool.query(DROP_TABLE1);
        // таблицу от которой зависит pgInnerJoin должен написать раньше, при проверке не забудь закомментить все создания и инсерты чтобы проверить query!
        await pgPool.query(CREATE_TABLE1);
        await pgPool.query(CREATE_TABLE);
        await pgPool.query(INSERT_DATA1);
        await pgPool.query(INSERT_DATA);

        const { rows } = await pgPool.query(query);
        console.log('fetchRows ', JSON.stringify(rows));
    } catch (e) {
        console.error(e);
    }
};
