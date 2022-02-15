import './MonsterSearch.scss';
import { ChangeEventHandler, FC, memo } from 'react';

type MonsterSearchProps = {
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
};

const MonsterSearch: FC<MonsterSearchProps> = ({ value, onChange }) => {
    return (
        <div className='monster-search'>
            <input
                type='text'
                className='monster-search__input'
                value={value}
                onChange={onChange}
                placeholder='find...'
            />
        </div>
    );
};

export default memo(MonsterSearch);
