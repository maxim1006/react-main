import { memo, FC, useState, useEffect } from 'react';

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
                {users.map(({ id, name }) => (
                    <li key={id} data-testid='user-item'>
                        {name}
                    </li>
                ))}
            </ul>
        )
    );
};

export default memo(UsersTest);
