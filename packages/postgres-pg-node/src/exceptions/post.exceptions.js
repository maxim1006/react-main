import { getAbstractException } from './abstract.exceptions.js';

export const getCreatePostException = e => getAbstractException('createPost error', e);
export const getPostByUserException = e => getAbstractException('getPostByUser error', e);
