import { useCallback, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { UserModel } from '@app/models/user.model';
import {
    addThunkUserAction,
    deleteThunkUserAction,
    fetchThunkUserAction,
    updateThunkUserAction,
} from '@app/store/thunk-user/thunk-user.action';
import { RootState, useAppDispatch } from '@app/store/store';
import { selectAllThunkUsers } from '@app/store/thunk-user/thunk-user.slice';

export function useThunkUserList() {
    const dispatch = useAppDispatch();
    const ref = useRef<HTMLInputElement>(null);

    const users = useSelector(selectAllThunkUsers);
    const usersLoading = useSelector<RootState>(state => state.thunkUser.loading);

    useEffect(() => {
        dispatch(fetchThunkUserAction());
    }, [dispatch]);

    const onAddUser = useCallback(() => {
        const value = ref.current?.value.trim();

        if (value) dispatch(addThunkUserAction({ name: value }));
    }, [dispatch]);

    const onUpdateUser = useCallback((user: UserModel) => dispatch(updateThunkUserAction(user)), [dispatch]);

    const onDeleteUser = useCallback((user: UserModel) => dispatch(deleteThunkUserAction(user)), [dispatch]);

    return {
        ref,
        users,
        usersLoading,
        addUserLoading: usersLoading,
        deleteUserLoading: usersLoading,
        updateUserLoading: usersLoading,
        onAddUser,
        onUpdateUser,
        onDeleteUser,
    };
}
