import React, { memo } from 'react';
import './dropdown-item.component.scss';

const DropdownItem = memo(({ leftIcon, rightIcon, children }) => {
    return (
        <a href='/' className='dropdown-item'>
            <span className='dropdown-item__icon _left'>{leftIcon}</span>
            {children}
            <span className='dropdown-item__icon _right'>{rightIcon}</span>
        </a>
    );
});

export default DropdownItem;
