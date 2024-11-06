import { UserModel } from '@app/models/user.model';
import { commonApi } from '../common/common.api';
import { debounce } from 'lodash';
import { ThunkDispatch } from 'redux-thunk';
import { FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta } from '@reduxjs/toolkit/query/react';
import { QueryReturnValue } from '@reduxjs/toolkit/query/react';

type MaybePromise<T> = T | PromiseLike<T>;

export const apiUserApi = commonApi.injectEndpoints({
    endpoints: build => ({
        fetchUserList: build.query<UserModel[], void>({
            query: () => ({
                url: `users`,
            }),
        }),
        fetchUser: build.query<UserModel, { userId: string | undefined | null }>({
            async queryFn({ userId }, { dispatch, getState }, __, fetchWithBQ) {
                const result = await fetchWithBQ({
                    url: `users/${userId}`,
                    method: 'GET',
                });

                // тут обязательно возвращаю result так как в нем meta,
                // обработка в общем middleware
                if (result.error) return result;

                const data = result.data as UserModel;

                return { data };
            },
            // disable cache
            // keepUnusedDataFor: 0,
        }),
        addUser: build.mutation<UserModel, { user: Partial<UserModel> }>({
            query: ({ user }) => ({
                url: `users`,
                method: 'POST',
                body: user,
            }),
            async onQueryStarted({ user }, { dispatch, queryFulfilled }) {
                // Pessimistic Updates
                try {
                    const { data: newUser } = await queryFulfilled;
                    dispatch(
                        apiUserApi.util.updateQueryData('fetchUserList', undefined, userList => {
                            userList.push(newUser);
                        }),
                    );
                } catch {
                    console.error('addUser onQueryStarted error');
                }
            },
        }),
        addUserDebounced: build.mutation<UserModel, { user: Partial<UserModel> } & { cancelDebounce?: boolean }>({
            async queryFn({ user, cancelDebounce }, { dispatch, getState }, __, fetchWithBQ) {
                // если вдруг захочу сбросить pending debounce
                // if (cancelDebounce) {
                //     debouncedAddUser.cancel();
                // }

                // Pessimistic Updates
                const data = (await debouncedAddUser(user, dispatch, fetchWithBQ)) ?? null;

                return { data };
            },
        }),
        updateUser: build.mutation<UserModel, { user: UserModel }>({
            query: ({ user }) => ({
                url: `users`,
                method: 'PUT',
                body: user,
            }),
            async onQueryStarted({ user }, { dispatch, queryFulfilled }) {
                // Optimistic update
                const updateResult = dispatch(
                    apiUserApi.util.updateQueryData('fetchUserList', undefined, userList => {
                        const userIndex = userList.findIndex(item => item.id === user.id);
                        userList[userIndex] = user;
                    }),
                );
                try {
                    await queryFulfilled;
                } catch {
                    updateResult.undo();
                }
            },
        }),
        deleteUser: build.mutation<UserModel, UserModel>({
            async queryFn(user, { dispatch, getState }, __, fetchWithBQ) {
                // const state = getState() as RootState;

                const result = await fetchWithBQ({
                    url: `users/${user.id}`,
                    method: 'DELETE',
                });

                // тут обязательно возвращаю result так как в нем meta
                if (result.error) return result;

                const data = result.data as UserModel;

                // Pessimistic Updates
                dispatch(
                    apiUserApi.util.updateQueryData('fetchUserList', undefined, userList => {
                        return userList.filter(userFromList => userFromList.id !== user.id);
                    }),
                );

                return { data };
            },
        }),
    }),
    overrideExisting: true,
});

const debouncedAddUser = debounce(
    async (
        user: Partial<UserModel>,
        dispatch: ThunkDispatch<any, any, any>,
        fetchWithBQ: (
            arg: string | FetchArgs,
        ) => MaybePromise<QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta>>,
    ) => {
        // Pessimistic Updates
        const result = await fetchWithBQ({
            url: `users`,
            method: 'POST',
            body: user,
        });

        if (result.error) throw result.error;

        const data = result.data as UserModel;

        dispatch(
            apiUserApi.util.updateQueryData('fetchUserList', undefined, userList => {
                userList.push(data);
            }),
        );

        return data;
    },
    1000,
    { leading: true },
);
