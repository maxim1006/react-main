import React from 'react';

export default function TodoComponent({onClick, completed, text}) {
    return (
        <li
            onClick={onClick}
            style={{
                textDecoration: completed ? 'line-through' : 'none'
            }}
        >
            {text}
        </li>
    );
}
