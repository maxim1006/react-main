import { pgPool } from '../pg-db.js';

export class UsersPgRestClient {
    static getAllUsers = (request, response) => {
        pgPool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
            if (error) {
                throw error;
            }
            response.status(200).json(results.rows);
        });
    };

    static getUserById = (request, response) => {
        const id = parseInt(request.params.id);

        pgPool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
            if (error) {
                throw error;
            }
            response.status(200).json(results.rows);
        });
    };

    static createUser = (request, response) => {
        const { name, email } = request.body;

        // RETURNING говорит о том что после создания функция вернет пользователя
        pgPool.query(
            'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
            [name, email],
            (error, results) => {
                if (error) {
                    throw error;
                }
                response
                    .status(201)
                    .send(`User added: ${JSON.stringify(results.rows[0], null, 2)}`);
            }
        );
    };

    static updateUser = (request, response) => {
        const paramsId = parseInt(request.params.id);
        const { name, email, id: bodyId } = request.body;

        const id = paramsId || bodyId;

        pgPool.query(
            'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *',
            [name, email, id],
            (error, results) => {
                if (error) {
                    throw error;
                }
                response
                    .status(200)
                    .send(`User modified: ${JSON.stringify(results.rows[0], null, 2)}`);
            }
        );
    };

    static deleteUser = (request, response) => {
        const id = parseInt(request.params.id);

        pgPool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
            if (error) {
                throw error;
            }
            response.status(200).send(`User deleted with ID: ${id}`);
        });
    };
}
