import React, { memo, FC, useState, useEffect } from 'react';

type UsersTestProps = {};

const UsersTest: FC<UsersTestProps> = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const json = await response.json();

            setUsers(json);
        })();
    }, []);

    return (
        !!users.length && (
            <ul data-testid='user-list'>
                {users.map(i => (
                    <li key={i.id} data-testid='user-item'>
                        {i.name}
                    </li>
                ))}
            </ul>
        )
    );
};

export default memo(UsersTest);
