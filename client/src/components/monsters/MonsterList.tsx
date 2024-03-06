import MaterialLoader from '../loader/MaterialLoader';
import './MonsterList.scss';
import MonsterItem from './MonsterItem';
import { FC, memo } from 'react';
import { MonstersListModel } from '@app/models/monsters.model';

type MonsterListPros = {
    list?: MonstersListModel;
};

const MonsterList: FC<MonsterListPros> = ({ list }) => {
    return list ? (
        <ul className='monster-list'>
            {list.map(item => (
                <li className='monster-list__item' key={item.id}>
                    <MonsterItem {...item} />
                </li>
            ))}
        </ul>
    ) : (
        <MaterialLoader />
    );
};

export default memo(MonsterList);
