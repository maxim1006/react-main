import { memo, useEffect, useRef, useState } from 'react';
import { userApi } from '@app/redux-toolkit/query/user.api';
import MaterialLoader from '../../loader/MaterialLoader';

type RtUsersContainerProps = {};

const RtUsersContainer = memo<RtUsersContainerProps>(function RtUsersContainer() {
    const [limit, setLimit] = useState(10);
    const [editId, setEditId] = useState('');
    const [editValue, setEditValue] = useState('');

    /*RTK Query*/
    const { data: users, error, isLoading, refetch } = userApi.useFetchAllUsersQuery(limit);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [fetchUsersLazy] = userApi.useLazyFetchAllUsersQuery();
    const [createUser, { isLoading: isCreating }] = userApi.useCreateUserMutation();
    const [deleteUser, { isLoading: isDeleting }] = userApi.useDeleteUserMutation();
    const [updateUser, { isLoading: isUpdating }] = userApi.useUpdateUserMutation();
    /**********/

    const ref = useRef<HTMLInputElement>();

    const createUserCb = async () => {
        if (!ref.current.value) return;

        const data = await createUser({ name: ref.current.value, limit }).unwrap();
        // console.log(data);
    };

    useEffect(() => {
        setTimeout(() => {
            // в данном случае обновит список только этого компонента а в RtUsersContainer1 так и будет список из 10
            // setLimit(3);
        }, 3000);
    }, []);

    if (error) return null;

    return (
        <>
            {(isLoading || isCreating || isDeleting || isUpdating) && <MaterialLoader />}

            <div>
                <div>
                    Check on number update
                    {/*сделал для проверки useQuery vs useLazyQuery*/}
                    <input
                        type='number'
                        onChange={e => {
                            let value = +e.target.value;
                            // только refetch будет вызывать гет в useQuery
                            setLimit(value < 0 ? 0 : value);
                            // console.log(e.target.value);
                            // будет вызывать гет постоянно
                            // fetchUsersLazy(value);
                        }}
                    />
                </div>
                <div>
                    <input type='text' ref={ref} /> <button onClick={createUserCb}>Create user</button>
                </div>

                <button
                    onClick={() => {
                        // так вызываю новый запрос
                        refetch();
                    }}
                    type='button'
                >
                    Refetch
                </button>
                {users &&
                    Object.values(users)?.map(i => {
                        return (
                            <div key={i.id}>
                                {i.id === editId ? (
                                    <div>
                                        <input
                                            type='text'
                                            value={editValue}
                                            onChange={i => {
                                                if (i.target.value.trim()) {
                                                    setEditValue(i.target.value);
                                                }
                                            }}
                                        />
                                        <button
                                            type='button'
                                            onClick={() => {
                                                setEditId('');
                                                updateUser({
                                                    ...i,
                                                    name: editValue,
                                                });
                                            }}
                                        >
                                            Submit
                                        </button>
                                    </div>
                                ) : (
                                    <div>
                                        Name: {i.name}
                                        <button
                                            type='button'
                                            onClick={() => {
                                                deleteUser(i.id);
                                            }}
                                        >
                                            Delete
                                        </button>
                                        <button
                                            type='button'
                                            onClick={() => {
                                                setEditId(i.id);
                                            }}
                                        >
                                            Edit
                                        </button>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                <hr />
            </div>
        </>
    );
});

export default RtUsersContainer;
