import Express from 'express';
import { usersController } from '../controllers/users.controller.js';

const usersRouter = new Express();

usersRouter.get('/users', usersController.getAll);
usersRouter.get('/users/:id', usersController.getById);
usersRouter.post('/users', usersController.create);
usersRouter.put('/users/:id', usersController.update);
usersRouter.put('/users', usersController.update);
usersRouter.delete('/users/:id', usersController.delete);

export { usersRouter };
