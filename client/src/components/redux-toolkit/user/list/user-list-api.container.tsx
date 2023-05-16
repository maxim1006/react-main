import React, { FC, memo } from 'react';
import styles from './user-list.module.scss';
import MyUser from '@app/components/redux-toolkit/user/user.component';
import { useApiUserList } from '@app/components/redux-toolkit/user/list/api-user-list.hook';

type UserListApiContainerProps = {};

const UserListApiContainer: FC<UserListApiContainerProps> = () => {
    const {
        ref,
        users,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        usersLoading,
        usersLoading2,
        addUserLoading,
        addUserDebouncedLoading,
        deleteUserLoading,
        updateUserLoading,
        onAddUser,
        onAddUserDebounced,
        onUpdateUser,
        onDeleteUser,
        onFetchUserLazy,
        onPollingStart,
        onPollingEnd,
    } = useApiUserList();

    return (
        <>
            <div>
                <button type='button' className={styles.button} onClick={onPollingStart}>
                    Start Polling
                </button>
                <button type='button' className={styles.button} onClick={onPollingEnd}>
                    End Polling
                </button>
                <button type='button' className={styles.button} onClick={onFetchUserLazy}>
                    Fetch Lazy User)
                </button>
            </div>
            <div className={styles.block}>
                <input type='text' ref={ref} placeholder='User Name' />
                <button type='button' className={styles.button} onClick={onAddUser}>
                    Add user
                </button>
                <button type='button' className={styles.button} onClick={onAddUserDebounced}>
                    Add Debounced user
                </button>
            </div>
            <div className={styles.block}>
                {usersLoading2 ||
                addUserLoading ||
                deleteUserLoading ||
                updateUserLoading ||
                addUserDebouncedLoading ? (
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

export default memo(UserListApiContainer);
