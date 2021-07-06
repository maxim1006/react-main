import React from 'react';
import './Song.scss';

export default ({ title, selected, onSelect }) => {
    const style = selected ? { backgroundColor: 'lightblue' } : null;

    return (
        <div className="song" style={style}>
            <div>
                Title:
                {title}
            </div>

            <button onClick={onSelect.bind(this, title)} type="button">
                Get Details
            </button>
        </div>
    );
};
