import { memo } from 'react';

import './User.scss';

export default memo(({ name, occupation }) => {
    return (
        <div className='user'>
            <span className='user__label'>Name: </span>
            <span className='user__value'>{name}</span>
            <br />
            <span className='user__label'>Occupation:</span>
            <span className='user__value'>{occupation}</span>
        </div>
    );
});
