import {
    getAllUsersException,
    getCreateUserException,
    getDeleteUserException,
    getUpdateUserException,
    getUserByIdException,
} from '../exceptions/user.exceptions.js';
import { UserModel } from '../models/user.model.js';

export class UsersSequelizeRestClient {
    static getAllUsers = async (request, response) => {
        try {
            // могу сразу задавать порядок вывода (https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#ordering)
            const users = await UserModel.findAll({
                order: [['name', 'ASC']],
            });

            response.status(200).json(users);
        } catch (e) {
            response.status(500).json(getAllUsersException(e));
        }
    };

    static getUserById = async (request, response) => {
        const id = parseInt(request.params.id);

        try {
            const user = await UserModel.findOne({
                id,
            });

            response.status(200).json(user);
        } catch (e) {
            response.status(500).json(getUserByIdException(e));
        }
    };

    static createUser = async (request, response) => {
        const { name, email } = request.body;

        try {
            const user = await UserModel.create({
                name,
                email,
            });

            response.status(201).send(`User added: ${JSON.stringify(user, null, 2)}`);
        } catch (e) {
            response.status(500).json(getCreateUserException(e));
        }
    };

    static updateUser = async (request, response) => {
        const paramsId = parseInt(request.params.id);
        const { name, email, id: bodyId } = request.body;

        const id = paramsId || bodyId;

        try {
            const user = await UserModel.findOne({
                id,
            });

            user.set({ name, email });

            await user.save();

            response.status(200).json(user);
        } catch (e) {
            response.status(500).json(getUpdateUserException(e));
        }
    };

    static deleteUser = async (request, response) => {
        const id = parseInt(request.params.id);

        try {
            const user = await UserModel.findOne({
                id,
            });

            await user.destroy();

            response.status(200).send(`User deleted with ID: ${id}`);
        } catch (e) {
            response.status(500).json(getDeleteUserException(e));
        }
    };
}
