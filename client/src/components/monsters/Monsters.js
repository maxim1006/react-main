import React, { useState } from 'react';
import MonsterSearch from './MonsterSearch';
import MonsterList from './MonsterList';
import useGetRequest from '../hooks/useGetRequest';

export default () => {
    const [searchValue, setSearchValue] = useState('');
    const monsterList = useGetRequest({ url: '/monsters' });

    let filteredMonsterList;

    if (Array.isArray(monsterList)) {
        filteredMonsterList = monsterList.filter(item =>
            item.name.toLowerCase().includes(searchValue.trim().toLowerCase()),
        );
    }

    return (
        <div className="monsters">
            <MonsterSearch value={searchValue} onChange={event => setSearchValue(event.target.value)} />
            <MonsterList list={filteredMonsterList} />
        </div>
    );
};
