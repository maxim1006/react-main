import React, { memo, useCallback, useRef, useState } from 'react';
import useGetRequest from '../useGetRequest';
import MaterialLoader from '../../loader/MaterialLoader';

export default memo(() => {
    const [searchValue, setSearchValue] = useState('');
    const [filteredSearchList, setFilteredSearchList] = useState([]);
    const familyDataRef = useRef();

    // тут использую useEffect внутри (как componentDidMount)
    familyDataRef.current = useGetRequest({
        url: '/family',
        cb: data => {
            setFilteredSearchList(data);
        }
    });

    const onSearch = useCallback(e => {
        const { value } = e.target;

        setFilteredSearchList(
            familyDataRef.current?.filter(({ name }) => {
                return name.toLowerCase().indexOf(value.trim().toLowerCase()) !== -1;
            })
        );

        setSearchValue(value);
    }, []);

    return (
        <>
            <input type='text' value={searchValue} onChange={onSearch} />
            {familyDataRef.current ? (
                filteredSearchList.map(({ name, age, occupation, id }) => (
                    <div key={id}>
                        {name} {age} {occupation}
                    </div>
                ))
            ) : (
                <MaterialLoader />
            )}
        </>
    );
});
