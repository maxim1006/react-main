import { FC, memo, useState } from 'react';
import MonsterSearch from './MonsterSearch';
import MonsterList from './MonsterList';
import { MonsterModel } from '@app/models/monsters.model';
import useGetRequest from '@app/components/hooks-components/useGetRequest';

type MonstersProps = {};

const Monsters: FC<MonstersProps> = () => {
    const [searchValue, setSearchValue] = useState('');
    const monsterList = useGetRequest({ url: '/monsters', cb: () => {} }) as any as MonsterModel[];

    let filteredMonsterList;

    if (monsterList && Array.isArray(monsterList)) {
        filteredMonsterList = monsterList.filter(item =>
            item.name.toLowerCase().includes(searchValue.trim().toLowerCase()),
        );
    }

    return (
        <div className='monsters'>
            <MonsterSearch value={searchValue} onChange={event => setSearchValue(event.target.value)} />
            <MonsterList list={filteredMonsterList} />
        </div>
    );
};

export default memo(Monsters);
