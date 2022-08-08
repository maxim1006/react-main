import React, { memo, useState } from 'react';
import { UserModel } from '@app/models/user.model';

import styles from './user.module.scss';

type MyUserProps = {
    model: UserModel;
    deleteUser?: (user: UserModel) => void;
    updateUser?: (user: UserModel) => void;
};

const MyUser = memo<MyUserProps>(function MyUser({ model, deleteUser, updateUser }) {
    const { name } = model;
    const [edit, setEdit] = useState<boolean>();
    const [value, setValue] = useState(name);
    const [active, setActive] = useState(false);

    return edit ? (
        <div className={styles.user}>
            <input
                type='text'
                value={value}
                onChange={e => {
                    const value = e.target.value.trim();
                    if (value) {
                        setValue(value);
                    }
                }}
            />
            <button
                type='button'
                onClick={() => {
                    if (value) {
                        updateUser?.({ ...model, name: value });
                    }
                }}
            >
                Update
            </button>
            <button
                onClick={() => {
                    setEdit(false);
                }}
                type='button'
            >
                Cancel
            </button>
        </div>
    ) : (
        <div className={styles.user} onClick={() => setActive(i => !i)}>
            <div>{name}</div>
            {active && (
                <>
                    <button
                        onClick={() => {
                            setEdit(true);
                        }}
                        type='button'
                    >
                        Edit
                    </button>
                    <button onClick={() => deleteUser?.(model)} type='button'>
                        Delete
                    </button>
                </>
            )}
        </div>
    );
});

export default MyUser;
