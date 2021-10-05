import React from 'react';

export default function Framework({ name, progress, onChange }) {
    return (
        <div className='framework'>
            <p>
                Name:
                {name}
            </p>
            <label>
                Progress:
                <input
                    type='checkbox'
                    checked={progress === 'done'}
                    onChange={onChange}
                    ref={el => el && (el.indeterminate = progress === 'indeterminate')}
                />
            </label>
        </div>
    );
}
