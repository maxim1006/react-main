import { pgPool } from './pg-db.js';

const DROP_TABLE = 'DROP TABLE IF EXISTS "pgFetchRows"';

const CREATE_TABLE = `CREATE TABLE IF NOT EXISTS "pgFetchRows" (
    "id" SERIAL,
    "name" VARCHAR(50) NOT NULL,
    "surname" VARCHAR(50) NOT NULL,
    "department_id" INTEGER,
    "salary" DECIMAL(15,2) NOT NULL,
    PRIMARY KEY ("id")
);`;

const INSERT_DATA = `INSERT INTO "pgFetchRows"
( "name", "surname", "department_id", "salary")
VALUES
('John', 'Stewart', 1, '2000.00'),
    ('Chris', 'Brown', 3, '2000.00'),
    ('Chris', 'Lewis', 3, '2000.00'),
    ('Kate', 'Lewis', 3, '2000.00'),
    ('Kate', 'Stewart', 3, '2000.00'),
    ('Ailisa', 'Lewis', 3, '2000.00'),
    ('Ailisa', 'Gomez', 3, '3000.00'),
    ('Gwendolyn', 'James', 2, '3000.00'),
    ('Simon', 'James', 2, '2000.00'),
    ('Simon', 'Brown', 3, '2000.00'),
    ('Simon', 'Collins', 3, '3000.00');
`;

// OFFSET says to skip that many rows before beginning to return rows. OFFSET 0 is the same as omitting the OFFSET clause, as is OFFSET with a NULL argument.
const query = `
            SELECT *
            FROM "pgFetchRows"
            ORDER BY "pgFetchRows"."id"
            LIMIT $2
            OFFSET (($1 - 1) * $2);
    `;

export const pgFetchRows = async (pageNumber = 1, pageSize = 3) => {
    try {
        await pgPool.query(DROP_TABLE);
        await pgPool.query(CREATE_TABLE);
        await pgPool.query(INSERT_DATA);

        const { rows } = await pgPool.query(query, [pageNumber, pageSize]);
        console.log('fetchRows ', JSON.stringify(rows, null, 2));
    } catch (e) {
        console.error(e);
    }
};
