import { UserModel } from '@app/models/user.model';
import { commonApi } from '../common/common.api';

export const apiUserApi = commonApi.injectEndpoints({
    endpoints: build => ({
        fetchUserList: build.query<UserModel[], void>({
            query: () => ({
                url: `user`,
            }),
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
