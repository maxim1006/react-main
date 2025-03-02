// обязательно такой импорт!!! иначе не буедет сгенеренного запроса + еще ес 4.1+ нужен
import { UserModel } from '@app/models/user.model';
import { commonApi } from '@app/store/common/common.api';

// Это чисто для примеров все что в апп используется лежит в api-user.api.ts
export const userApi = commonApi.injectEndpoints({
    endpoints: build => ({
        // в дженерике вторым параметром передаю тип аргумента который ожидает этот хук тут void
        fetchAllUsers: build.query<UserModel[], number | void>({
            query: (limit: number = 5) => ({
                url: '/users',
                params: {
                    limit,
                },
            }),
        }),
        // в дженерике указываю что вернется а вторым что передаю (<ResultType, QueryArg>)
        createUser: build.mutation<UserModel, UserModel & { limit: number }>({
            query: user => ({
                url: '/users',
                method: 'POST',
                body: user,
            }),
            // пример пессимистик реквеста
            async onQueryStarted(user, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;

                    // console.log({ data });

                    dispatch(
                        userApi.util.updateQueryData('fetchAllUsers', user.limit, draft => {
                            Array.isArray(draft) && draft.unshift(data);
                        }),
                    );
                } catch (e) {
                    console.error('userApi createUser error', e);
                }
            },
            // tagTypes3
            // invalidatesTags: ['User']
        }),
        updateUser: build.mutation<UserModel, UserModel>({
            query: user => ({
                url: `/users`,
                method: 'PUT',
                body: user,
            }),
        }),
        deleteUser: build.mutation<UserModel, string>({
            query: id => ({
                url: `/users/${id}`,
                method: 'DELETE',
            }),
        }),
    }),
});
