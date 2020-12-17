import React, { memo, useRef } from 'react';
import { UseContextHook } from './use-context.hook';
import MaterialLoaderComponent from '../../loader/MaterialLoader';

type UseContextContainerProps = {};

const UseContextContainer = memo<UseContextContainerProps>(() => {
    const inputRef = useRef<HTMLInputElement>(null);
    const { result, getInfo, loading } = UseContextHook();

    return (
        <>
            {loading?.toString()}
            {loading ? (
                <MaterialLoaderComponent />
            ) : (
                <>
                    Title: {result?.title}, Completed: {result?.completed.toString()}
                </>
            )}

            <input ref={inputRef} type="text" />
            <button
                disabled={loading}
                onClick={() => {
                    const value = inputRef.current.value;

                    if (value.trim()) {
                        getInfo(parseFloat(value));
                    }
                }}
            >
                Get todo
            </button>
        </>
    );
});

export default UseContextContainer;
