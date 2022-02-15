import { memo, useContext, useRef } from 'react';
import MaterialLoaderComponent from '../../loader/MaterialLoader';
import { ExampleContext } from '@app/components/hooks/use-context/example.context';

type UseContextContainerProps = {};

const UseContextContainer = memo<UseContextContainerProps>(() => {
    const inputRef = useRef<HTMLInputElement>(null);
    const { result, getInfo, loading } = useContext(ExampleContext);

    return (
        <>
            {loading?.toString()}
            {loading ? (
                <MaterialLoaderComponent />
            ) : (
                <>
                    Title: {result?.name}, Completed: {result?.completed.toString()}
                </>
            )}

            <input ref={inputRef} type='text' />
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
