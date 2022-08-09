import React, { memo } from 'react';
import styles from './user-list.module.scss';
import { useDispatch } from 'react-redux';
import MyUser from '@app/components/redux-toolkit/user/user.component';
import { useThunkUserList } from '@app/components/redux-toolkit/user/list/thunk-user-list.hook';
import { useManualUserList } from '@app/components/redux-toolkit/user/list/api-user-list.hook';

type UsersContainerProps = {};

const UserListContainer = memo<UsersContainerProps>(function UsersContainer() {
    // eslint-disable-next-line no-empty-pattern
    const {
        ref,
        users,
        usersLoading,
        addUserLoading,
        deleteUserLoading,
        updateUserLoading,
        onAddUser,
        onUpdateUser,
        onDeleteUser,
    } = useManualUserList();

    // const {
    //     ref,
    //     users,
    //     usersLoading,
    //     addUserLoading,
    //     deleteUserLoading,
    //     updateUserLoading,
    //     onAddUser,
    //     onUpdateUser,
    //     onDeleteUser,
    // } = useThunkUserList();

    const dispatch = useDispatch();

    return (
        <>
            <div className={styles.block}>
                <input type='text' ref={ref} placeholder='User Name' />
                <button type='button' className={styles.button} onClick={onAddUser}>
                    Add user
                </button>
            </div>
            <div className={styles.block}>
                {usersLoading || addUserLoading || deleteUserLoading || updateUserLoading ? (
                    <>Loading...</>
                ) : (
                    <ul className={styles.list}>
                        {users.map(user => (
                            <li className={styles.listItem} key={user.id}>
                                <MyUser model={user} updateUser={onUpdateUser} deleteUser={onDeleteUser} />
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
});

export default UserListContainer;
