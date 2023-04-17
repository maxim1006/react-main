import { useCallback, useEffect, useRef, useState } from 'react';
import { UserModel } from '@app/models/user.model';
import { apiUserApi } from '@app/store/user/api-user.api';

export function useApiUserList() {
    const [pollingInterval, setPollingInterval] = useState(0);

    const { data: users = [], isLoading: usersLoading } = apiUserApi.useFetchUserListQuery();
    const {
        data: user,
        isLoading: userLoading,
        isFetching: userFetching,
    } = apiUserApi.useFetchUserQuery(
        { userId: users[0]?.id ?? null },
        {
            pollingInterval,

            // skip, // скипнуть при условии
            // refetchOnMountOrArgChange: true // насильно делать запрос
        }
    );
    const [fetchUserLazy, lazyUser] = apiUserApi.useLazyFetchUserQuery();

    /*
    RTK Query provides an option to share results across mutation hook instances using the fixedCacheKey option. Any useMutation hooks with the same fixedCacheKey string will share results between each other when any of the trigger functions are called. This should be a unique string shared between each mutation hook instance you wish to share results.
     */
    const [addUser, { isLoading: addUserLoading }] = apiUserApi.useAddUserMutation({ fixedCacheKey: 'userMutation' });
    const [addUserDebounced, { isLoading: addUserDebouncedLoading }] = apiUserApi.useAddUserDebouncedMutation({
        fixedCacheKey: 'userMutation',
    });
    const [deleteUser, { isLoading: deleteUserLoading }] = apiUserApi.useDeleteUserMutation({
        fixedCacheKey: 'userMutation',
    });
    const [updateUser, { isLoading: updateUserLoading }] = apiUserApi.useUpdateUserMutation({
        fixedCacheKey: 'userMutation',
    });

    const ref = useRef<HTMLInputElement>(null);

    const onAddUser = useCallback(() => {
        const value = ref.current?.value.trim();

        if (value)
            addUser({
                user: { name: value },
            });
    }, [addUser]);

    const onAddUserDebounced = useCallback(() => {
        const value = ref.current?.value.trim();

        if (value)
            addUserDebounced({
                user: { name: value },
            });
    }, [addUserDebounced]);

    const onFetchUserLazy = useCallback(async () => {
        const lazyUser = await fetchUserLazy({ userId: users[0]?.id ?? null });
        console.log({ lazyUser });
    }, [fetchUserLazy, users]);

    const onUpdateUser = useCallback(
        async (user: UserModel) => {
            const updatedUser = await updateUser({ user })
                .unwrap()
                .catch(e => console.log(e));

            console.log({ updatedUser });
        },
        [updateUser]
    );
    const onDeleteUser = useCallback((user: UserModel) => deleteUser(user), [deleteUser]);

    useEffect(() => {
        console.log({ user, userLoading, userFetching });
    }, [user, userLoading, userFetching]);

    useEffect(() => {
        console.log({ addUserLoading, deleteUserLoading, updateUserLoading, addUserDebouncedLoading });
    }, [addUserLoading, deleteUserLoading, updateUserLoading, addUserDebouncedLoading]);

    useEffect(() => {
        // будет вызываться каждый раз на каждый запрос за лейзи
        console.log('in useEffect ', { lazyUser });
    }, [lazyUser]);

    const onPollingStart = useCallback(async () => setPollingInterval(1000), []);
    const onPollingEnd = useCallback(async () => setPollingInterval(0), []);

    return {
        ref,
        users,
        usersLoading,
        addUserLoading,
        deleteUserLoading,
        updateUserLoading,
        addUserDebouncedLoading,
        onAddUser,
        onAddUserDebounced,
        onDeleteUser,
        onUpdateUser,
        onFetchUserLazy,
        onPollingStart,
        onPollingEnd,
    };
}
