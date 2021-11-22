import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
import { UserModel } from '@app/models/user.model';

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001/api/v1'
    }),
    endpoints: build => ({
        fetchAllUsers: build.query<UserModel[], string>({
            query: () => ({
                url: '/users'
            })
        })
    })
});
