import React, { FC, memo } from 'react';
import styles from './user-list.module.scss';
import MyUser from '@app/components/redux-toolkit/user/user.component';
import { useThunkUserList } from '@app/components/redux-toolkit/user/list/thunk-user-list.hook';

type UserListThunkContainerProps = {};

const UserListThunkContainer: FC<UserListThunkContainerProps> = () => {
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
    } = useThunkUserList();

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
};

export default memo(UserListThunkContainer);
