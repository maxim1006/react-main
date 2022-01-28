import React, { memo } from 'react';
import MaterialLoader from '../../loader/MaterialLoader';
import useFetch from '../../hooks/useFetch';

const FamilyFetch = memo(() => {
    const { data, refetch } = useFetch({ url: 'http://localhost:3001/api/family' });
    // const { data: data1 } = useFetch({ url: 'https://jsonplaceholder.typicode.com/users' });

    return data ? (
        <>
            <button
                type='button'
                onClick={() => {
                    refetch();
                }}
            >
                Start fetch request
            </button>
            <ul>
                {data.map(({ name, age, id }) => (
                    <li key={id}>
                        {name}:{age}
                    </li>
                ))}
            </ul>
        </>
    ) : (
        <MaterialLoader />
    );
});

export default FamilyFetch;
