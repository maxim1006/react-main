import { useCallback, useRef } from 'react';
import { UserModel } from '@app/models/user.model';
import { apiUserApi } from '@app/store/user/api-user.api';

export function useUserList() {
    const { data: users = [], isLoading: usersLoading } = apiUserApi.useFetchUserListQuery();
    const [addUser, { isLoading: addUserLoading }] = apiUserApi.useAddUserMutation();
    const [deleteUser, { isLoading: deleteUserLoading }] = apiUserApi.useDeleteUserMutation();
    const [updateUser, { isLoading: updateUserLoading }] = apiUserApi.useUpdateUserMutation();

    const ref = useRef<HTMLInputElement>(null);

    const onAddUser = useCallback(() => {
        const value = ref.current?.value.trim();

        if (value)
            addUser({
                user: { name: value },
            });
    }, [addUser]);

    const onUpdateUser = useCallback((user: UserModel) => updateUser({ user }), [updateUser]);
    const onDeleteUser = useCallback((user: UserModel) => deleteUser(user), [deleteUser]);

    return {
        ref,
        users,
        usersLoading,
        addUserLoading,
        deleteUserLoading,
        updateUserLoading,
        onAddUser,
        onDeleteUser,
        onUpdateUser,
    };
}
