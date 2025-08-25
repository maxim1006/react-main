import { IUser } from '../models/user.model';

export async function createUser(user: IUser) {
    const users = await import('../data/users.json', { with: { type: 'json' } });

    console.log(users);
}
