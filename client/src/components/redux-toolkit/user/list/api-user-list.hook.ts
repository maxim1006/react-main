import { useCallback, useEffect, useRef, useState } from 'react';
import { UserModel } from '@app/models/user.model';
import { apiUserApi } from '@app/store/user/api-user.api';
import { useSelector } from 'react-redux';
import { selectApiUserListIsLoading } from '@app/store/user/api-user.selectors';
import { QueryActionCreatorResult } from '@reduxjs/toolkit/query/react';
import { useAppDispatch } from '@app/store/store';

export function useApiUserList() {
    const dispatch = useAppDispatch();

    const [pollingInterval, setPollingInterval] = useState(0);

    const { data: users = [], isLoading: usersLoading } = apiUserApi.useFetchUserListQuery(undefined, {
        // класс - отработает когда снова подключусь к сети
        // https://redux-toolkit.js.org/rtk-query/api/setupListeners
        refetchOnReconnect: true,
    });

    // тоже что и usersLoading но получается напрямую из api
    const usersLoading2 = useSelector(selectApiUserListIsLoading);

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
        },
    );

    // получить статус запроса в компоненте
    // const fetchUserStatus = useSelector(
    //     (state: RootState) => apiUserApi.endpoints.fetchUser.select({ userId: users[0]?.id })(state).status,
    // );
    //
    // console.log(`fetchUserStatus ${users[0]?.id} `, { fetchUserStatus });

    const [fetchUserLazy, lazyUser] = apiUserApi.useLazyFetchUserQuery();

    const fetchUserLazyReq = useRef<QueryActionCreatorResult<any>>();

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
        fetchUserLazyReq.current?.abort();
        // второй аргумент это cache для lazy // https://redux-toolkit.js.org/rtk-query/api/created-api/hooks#uselazyquerysubscription
        fetchUserLazyReq.current = fetchUserLazy({ userId: users[0]?.id ?? null }, true);
        const lazyUser = await fetchUserLazyReq.current;

        console.log({ lazyUser });
    }, [fetchUserLazy, users]);

    const onUpdateUser = useCallback(
        async (user: UserModel) => {
            const updatedUser = await updateUser({ user })
                .unwrap()
                .catch(e => console.log(e));

            console.log({ updatedUser });
        },
        [updateUser],
    );
    const onDeleteUser = useCallback(
        async (user: UserModel) => {
            let res;

            res = await deleteUser(user);

            if ('error' in res) {
                console.error('delete use error');
            }

            // alternative
            // try {
            //     res = await deleteUser(user).unwrap();
            // } catch (e) {
            //     console.error('delete use error');
            // }

            console.log(res);
        },
        [deleteUser],
    );

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

    const customInitiateFetchUserList = useCallback(async () => {
        const res = await dispatch(apiUserApi.endpoints.fetchUserList.initiate());
        console.log({ res });
    }, [dispatch]);

    return {
        ref,
        users,
        usersLoading,
        usersLoading2,
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
        customInitiateFetchUserList,
    };
}
