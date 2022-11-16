import { UsersRestClient } from '../clients/users-rest.client.js';

// тут интересно что надо использовать лямбда функцию чтобы контекст класса сохранить
class UsersController {
    constructor(client) {
        this.client = client;
    }

    create = (req, res) => {
        this.client.createUser(req, res);
    };
    getAll = (req, res) => {
        this.client.getAllUsers(req, res);
    };
    getById = (req, res) => {
        this.client.getUserById(req, res);
    };
    update = (req, res) => {
        this.client.updateUser(req, res);
    };
    delete = (req, res) => {
        this.client.deleteUser(req, res);
    };
}

export const usersController = new UsersController(UsersRestClient);
