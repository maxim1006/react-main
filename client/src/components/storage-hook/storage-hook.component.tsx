import { memo, useRef } from 'react';
import { useLocalStorage, useSessionStorage } from '@app/hooks/storage';
import StorageHookProblem from '@app/components/storage-hook/storage-hook-problem.component';
import cn from 'classnames';

type StorageHookProps = {};

const StorageHook = memo<StorageHookProps>(function StorageHook() {
    const ref = useRef<HTMLInputElement>(null!);
    const ref1 = useRef<HTMLInputElement>(null!);
    const [value, setSessionStorageValue, removeSessionStorageValue] = useSessionStorage('name');
    const [value1, setLocalStorageValue, removeLocalStorageValue] = useLocalStorage('age');

    return (
        <div className={cn('class class1')}>
            <section style={{ marginBottom: '30px' }}>
                <h3>Session storage</h3>
                <p>Value: {value}</p>
                <input ref={ref} type='text' />
                <button onClick={() => setSessionStorageValue(ref.current.value)}>Set sessionStorage value</button>
                <button onClick={() => removeSessionStorageValue(ref.current.value)}>
                    Remove sessionStorage value
                </button>
            </section>

            <section style={{ marginBottom: '30px' }}>
                <h3>Local storage</h3>
                <p>Value: {value1}</p>
                <input ref={ref1} type='text' />
                <button onClick={() => setLocalStorageValue(ref1.current.value)}>Set local value</button>
                <button onClick={() => removeLocalStorageValue(ref1.current.value)}>Remove local value</button>
            </section>

            <StorageHookProblem />
        </div>
    );
});

export default StorageHook;
