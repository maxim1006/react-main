import { PostsRestClient } from '../clients/posts-rest.client.js';

class PostsController {
    create(req, res) {
        PostsRestClient.create(req, res);
    }

    getByUser(req, res) {
        PostsRestClient.getByUser(req, res);
    }
}

export const postsController = new PostsController();
