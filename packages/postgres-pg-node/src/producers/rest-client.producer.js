import { UsersPgRestClient } from '../clients/users-pg-rest.client.js';
import { UsersSequelizeRestClient } from '../clients/users-sequelize-rest.client.js';
import { PostsPgRestClient } from '../clients/posts-pg-rest.client.js';
import { PostsSequelizeRestClient } from '../clients/posts-sequelize-rest.client.js';
import { IS_PG } from '../constants/common.constants.js';

class RestClientProducer {
    getUsersRestClient() {
        return IS_PG ? UsersPgRestClient : UsersSequelizeRestClient;
    }

    getPostsRestClient() {
        return IS_PG ? PostsPgRestClient : PostsSequelizeRestClient;
    }
}

export const restClientProducer = new RestClientProducer();
