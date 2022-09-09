import { UserModel } from '@app/models/user.model';
import { commonApi } from '../common/common.api';
import { MaybePromise } from '@reduxjs/toolkit/dist/query/tsHelpers';
import { debounce } from 'lodash';
import { ThunkDispatch } from 'redux-thunk';
import { FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta } from '@reduxjs/toolkit/query';
import { QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes';

export const apiUserApi = commonApi.injectEndpoints({
    endpoints: build => ({
        fetchUserList: build.query<UserModel[], void>({
            query: () => ({
                url: `user`,
            }),
        }),
        fetchUser: build.query<UserModel, { userId: string }>({
            async queryFn({ userId }, { dispatch, getState }, __, fetchWithBQ) {
                const result = await fetchWithBQ({
                    url: `user/${userId}`,
                    method: 'GET',
                });

                if (result.error) throw result.error;

                const data = result.data as UserModel;

                return { data };
            },
        }),
        addUser: build.mutation<UserModel, { user: Partial<UserModel> }>({
            query: ({ user }) => ({
                url: `user`,
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
                        })
                    );
                } catch {}
            },
        }),
        addUserDebounced: build.mutation<UserModel, { user: Partial<UserModel> }>({
            async queryFn({ user }, { dispatch, getState }, __, fetchWithBQ) {
                // Pessimistic Updates
                const data = (await debouncedAddUser(user, dispatch, fetchWithBQ)) ?? null;

                return { data };
            },
        }),
        updateUser: build.mutation<UserModel, { user: UserModel }>({
            query: ({ user }) => ({
                url: `user`,
                method: 'PUT',
                body: user,
            }),
            async onQueryStarted({ user }, { dispatch, queryFulfilled }) {
                // Optimistic update
                const updateResult = dispatch(
                    apiUserApi.util.updateQueryData('fetchUserList', undefined, userList => {
                        const userIndex = userList.findIndex(item => item.id === user.id);
                        userList[userIndex] = user;
                    })
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
                    url: `user/${user.id}`,
                    method: 'DELETE',
                });

                if (result.error) throw result.error;

                const data = result.data as UserModel;

                // Pessimistic Updates
                dispatch(
                    apiUserApi.util.updateQueryData('fetchUserList', undefined, userList => {
                        return userList.filter(userFromList => userFromList.id !== user.id);
                    })
                );

                return { data };
            },
        }),
    }),
});

const debouncedAddUser = debounce(
    async (
        user: Partial<UserModel>,
        dispatch: ThunkDispatch<any, any, any>,
        fetchWithBQ: (
            arg: string | FetchArgs
        ) => MaybePromise<QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta>>
    ) => {
        // Pessimistic Updates
        const result = await fetchWithBQ({
            url: `user`,
            method: 'POST',
            body: user,
        });

        if (result.error) throw result.error;

        const data = result.data as UserModel;

        dispatch(
            apiUserApi.util.updateQueryData('fetchUserList', undefined, userList => {
                userList.push(data);
            })
        );

        return data;
    },
    1000
);
