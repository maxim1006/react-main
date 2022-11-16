import { pgPool } from '../pg-db.js';

export class PostsPgRestClient {
    static async create(request, response) {
        const { title, content, userId } = request.body;

        const result = await pgPool.query(
            'INSERT INTO posts (title, content, user_id) VALUES ($1, $2, $3) RETURNING *',
            [title, content, userId]
        );

        response.status(201).json(result.rows[0]);
    }

    static async getByUser(request, response) {
        const id = parseFloat(request.query.id);
        // тут интересно что не надо делать RETURNING *, если добавить то как раз будет ошибка
        const posts = await pgPool.query('SELECT * FROM posts WHERE user_id = $1', [id]);

        response.status(200).json(posts.rows);
    }
}
