import './MonsterSearch.scss';

export default function MonsterSearch({ value, onChange }) {
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
}
