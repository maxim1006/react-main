import React, { memo } from 'react';

export interface ITodoProps {
    completed: boolean;
    onChange: () => void;
    name: string;
}

const Todo = ({ completed, onChange, name }: ITodoProps) => (
    <label>
        <input checked={completed} onChange={onChange} type="checkbox" />
        <span
            style={{
                textDecoration: completed ? 'line-through' : 'none',
            }}
        >
            {name}
        </span>
    </label>
);

export default memo(Todo);
