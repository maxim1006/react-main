import { restClientProducer } from '../producers/rest-client.producer.js';

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

export const postsController = new PostsController(restClientProducer.getPostsRestClient());
