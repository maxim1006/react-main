import { PostsRestClient } from '../clients/posts-rest.client.js';

class PostsController {
    constructor(client) {
        this.client = client;
    }

    create = (req, res) => {
        this.client.create(req, res);
    };

    getByUser = (req, res) => {
        this.client.getByUser(req, res);
    };
}

export const postsController = new PostsController(PostsRestClient);
