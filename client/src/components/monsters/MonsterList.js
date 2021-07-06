import React from 'react';
import MaterialLoader from '../loader/MaterialLoader';
import './MonsterList.scss';
import MonsterItem from './MonsterItem';

export default ({ list }) =>
    list ? (
        <ul className="monster-list">
            {list.map(item => (
                <li className="monster-list__item" key={item.id}>
                    <MonsterItem {...item} />
                </li>
            ))}
        </ul>
    ) : (
        <MaterialLoader />
    );
