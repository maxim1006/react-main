import { getAbstractException } from './abstract.exceptions.js';

export const getDeleteUserException = e => getAbstractException('deleteUser error', e);
export const getUpdateUserException = e => getAbstractException('updateUser error', e);
export const getCreateUserException = e => getAbstractException('createUser error', e);
export const getUserByIdException = e => getAbstractException('getUserById error', e);
export const getAllUsersException = e => getAbstractException('getAllUsers error', e);
