import Express from 'express';
import { postsController } from '../controllers/posts.controller.js';

const postsRouter = new Express();

postsRouter.post('/posts', postsController.create);
postsRouter.get('/posts', postsController.getByUser);

export { postsRouter };
