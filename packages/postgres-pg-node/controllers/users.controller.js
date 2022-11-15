import { UsersRestClient } from '../clients/users-rest.client.js';

class UsersController {
    create(req, res) {
        UsersRestClient.createUser(req, res);
    }
    getAll(req, res) {
        UsersRestClient.getAllUsers(req, res);
    }
    getById(req, res) {
        UsersRestClient.getUserById(req, res);
    }
    update(req, res) {
        UsersRestClient.updateUser(req, res);
    }
    delete(req, res) {
        UsersRestClient.deleteUser(req, res);
    }
}

export const usersController = new UsersController();
