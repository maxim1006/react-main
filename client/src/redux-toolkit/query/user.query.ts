// обязательно такой импорт!!! иначе не буедет сгенеренного запроса + еще ес 4.1+ нужен
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UserModel } from '@app/models/user.model';

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001/api/v1'
    }),
    // tagTypes1  это таг тип за которым при инвалидации будет следить кеш rtk query, типо как кеш ГКЛ
    tagTypes: ['User'],
    endpoints: build => ({
        // в дженерике вторым параметром передаю тип аргумента который ожидает этот хук тут void
        fetchAllUsers: build.query<UserModel[], number | void>({
            query: (limit: number = 5) => ({
                url: '/users',
                params: {
                    limit
                }
            }),
            // tagTypes2
            providesTags: result => {
                // тут результат запроса
                // console.log(result);
                return ['User'];
            }
        }),
        // в дженерике указываю что вернется а вторым что передаю (<ResultType, QueryArg>)
        createUser: build.mutation<UserModel, UserModel>({
            query: user => ({
                url: '/users',
                method: 'POST',
                body: user
            }),
            // tagTypes3
            invalidatesTags: ['User']
        }),
        updateUser: build.mutation<UserModel, UserModel>({
            query: user => ({
                url: `/users`,
                method: 'PUT',
                body: user
            }),
            // tagTypes3
            invalidatesTags: ['User']
        }),
        deleteUser: build.mutation<UserModel, string>({
            query: id => ({
                url: `/users/${id}`,
                method: 'DELETE'
            }),
            // tagTypes3
            invalidatesTags: ['User']
        })
    })
});
