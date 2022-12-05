import { getCreatePostException, getPostByUserException } from '../exceptions/post.exceptions.js';
import { PostModel } from '../models/post.model.js';

export class PostsSequelizeRestClient {
    static async create(request, response) {
        const { title, content, userId } = request.body;

        try {
            const post = await PostModel.create({ title, content, userId });

            response.status(201).send(`Post added: ${JSON.stringify(post, null, 2)}`);
        } catch (e) {
            response.status(500).json(getCreatePostException(e));
        }
    }

    static async getByUser(request, response) {
        // http://localhost:3124/api/posts?id=1
        const userId = parseInt(request.query.id);

        try {
            const user = await PostModel.findAll({
                where: { userId },
            });

            response.status(200).json(user);
        } catch (e) {
            response.status(500).json(getPostByUserException(e));
        }
    }
}
