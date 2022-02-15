import { FC, memo, useState } from 'react';
import MonsterSearch from './MonsterSearch';
import MonsterList from './MonsterList';
import useGetRequest from '../hooks/useGetRequest';
import { MonstersListModel } from '@app/models/monsters.model';

type MonstersProps = {};

const Monsters: FC<MonstersProps> = () => {
    const [searchValue, setSearchValue] = useState('');
    const monsterList: MonstersListModel = useGetRequest({ url: '/monsters' } as { url: string; cb: any });

    let filteredMonsterList;

    if (Array.isArray(monsterList)) {
        filteredMonsterList = monsterList.filter(item =>
            item.name.toLowerCase().includes(searchValue.trim().toLowerCase())
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
