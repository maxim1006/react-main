import React, { memo, useRef } from 'react';
import { useLocalStorage, useSessionStorage } from '../../hooks/storage';

type StorageProps = {};

const Storage1 = memo<StorageProps>(function Storage() {
    const ref = useRef<HTMLInputElement>();
    const ref1 = useRef<HTMLInputElement>();
    const [value, setSessionStorageValue, removeSessionStorageValue] = useSessionStorage('name');
    const [value1, setLocalStorageValue, removeLocalStorageValue] = useLocalStorage('age');

    return (
        <div>
            <section>
                <h3>Session storage 1</h3>
                <p>Value: {value}</p>
                <input ref={ref} type="text" />
                <button onClick={() => setSessionStorageValue(ref.current.value)}>Set sessionStorage value</button>
                <button onClick={() => removeSessionStorageValue(ref.current.value)}>
                    Remove sessionStorage value
                </button>
            </section>

            <section>
                <h3>Local storage 1</h3>
                <p>Value: {value1}</p>
                <input ref={ref1} type="text" />
                <button onClick={() => setLocalStorageValue(ref1.current.value)}>Set local value</button>
                <button onClick={() => removeLocalStorageValue(ref1.current.value)}>Remove local value</button>
            </section>
        </div>
    );
});

export default Storage1;