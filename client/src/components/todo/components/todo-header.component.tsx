import React, { memo, useRef } from 'react';

export interface ITodoHeaderProps {
    onClick: (value: string) => void;
}

const TodoHeader = ({ onClick }: ITodoHeaderProps) => {
    // ! здесь означает It is a way to tell the compiler "this expression cannot be null or undefined
    const inputRef = useRef<HTMLInputElement>(null!);
    // еще могу так написать
    // const inputRef = useRef<HTMLInputElement | null>(null);

    return (
        <div>
            <input type="text" ref={inputRef} />
            <button
                onClick={() => {
                    onClick(inputRef.current.value);
                    inputRef.current.value = '';
                }}
            >
                Add todo
            </button>
        </div>
    );
};

export default memo(TodoHeader);
