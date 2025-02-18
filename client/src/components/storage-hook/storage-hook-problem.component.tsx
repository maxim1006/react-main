import React, { Dispatch, FC, memo } from 'react';
import { useLocalStorage } from '@app/hooks/storage';
import { useLocalStorage as useLocalStorageService } from '@app/hooks/local-storage-service.hook';
import styles from './storage-hook-problem.module.scss';
import { useLocalStorageUseSyncExternalStore } from '@app/hooks/local-storage-useSyncExternalStore.hook';

type StorageHookProblemProps = {};

const StorageHookProblem: FC<StorageHookProblemProps> = () => {
    const [value, setValue] = useLocalStorage('prop1');

    return (
        <>
            <h4>Problem</h4>
            <p>Value changes in parent its ok</p>
            <input onChange={e => setValue(e.target.value)} type='text' />
            <Child1 parentProp={value} setValue={setValue} />
            <Child2 parentProp={value} setValue={setValue} />
        </>
    );
};

function Child1({ parentProp, setValue }: { parentProp: string; setValue: Dispatch<any> }) {
    const [valueInner, setValueInner] = useLocalStorage('prop1');
    const [valueService, setValueService] = useLocalStorageService<string>('service');
    const [valueServiceObj, setValueService1] = useLocalStorageService<{ prop?: string }>('serviceObj');
    // тут еще прикольно что он в соседней вкладке тоже сработает за счет storage эвента
    const [useLocalStorageUseSyncExternalStoreState, setUseLocalStorageUseSyncExternalStoreState] =
        useLocalStorageUseSyncExternalStore('useLocalStorageUseSyncExternalStore', '');

    // https://react.dev/reference/react/useSyncExternalStore#im-getting-an-error-the-result-of-getsnapshot-should-be-cached
    // значение, возвращаемое getSnapshot, должно быть иммутабельным. Это означает, что мы не может возвращать, например, массивы или объекты.
    // const [useLocalStorageUseSyncExternalStoreStateObj, setUseLocalStorageUseSyncExternalStoreStateObj] =
    //     useLocalStorageUseSyncExternalStore('useLocalStorageUseSyncExternalStoreObj', { prop: '' });

    return (
        <section className={styles.childHost}>
            <h4>Props in Child1</h4>
            <article>
                <h4>parentProp:</h4>
                <p>Работает, но надо передавать и value и setValue из родителя вглубь всех чайлдов</p>
                <input value={parentProp} onChange={e => setValue(e.target.value)} type='text' />
            </article>
            <article>
                <h4>valueInner works only in component:</h4>
                <p>
                    Проблемный пример использую обычный useLocalStorage и да меняется значение в localStorage но не
                    меняется в sibling
                </p>
                <input value={valueInner} onChange={e => setValueInner(e.target.value)} type='text' />
            </article>
            <article>
                <h4>useSyncExternalStoreState solves the problem:</h4>
                <p>Правильный пример c useSyncExternalStoreState</p>
                <input
                    value={useLocalStorageUseSyncExternalStoreState || ''}
                    onChange={e => setUseLocalStorageUseSyncExternalStoreState(e.target.value)}
                    type='text'
                />
            </article>
            {/*<article>*/}
            {/*    <h4>useSyncExternalStoreState:</h4>*/}
            {/*    <p>Правильный пример c объектом в useSyncExternalStoreState</p>*/}
            {/*    <input*/}
            {/*        value={useLocalStorageUseSyncExternalStoreStateObj?.prop}*/}
            {/*        onChange={e => setUseLocalStorageUseSyncExternalStoreStateObj({ prop: e.target.value })}*/}
            {/*        type='text'*/}
            {/*    />*/}
            {/*</article>*/}
            <article>
                <h4>valueService solves the problem:</h4>
                <p>Правильный пример c valueService</p>
                <input value={valueService || ''} onChange={e => setValueService(e.target.value)} type='text' />
            </article>
            <article>
                <h4>valueServiceObj:</h4>
                <p>Правильный пример c объектом в valueService</p>
                <input
                    value={valueServiceObj?.prop}
                    onChange={e => setValueService1({ prop: e.target.value })}
                    type='text'
                />
            </article>
        </section>
    );
}

function Child2({ parentProp, setValue }: { parentProp: string; setValue: Dispatch<any> }) {
    const [valueInner, setValueInner] = useLocalStorage('prop1');
    const [valueService, setValueService] = useLocalStorageService<string>('service');
    console.log({ valueServiceChild2: valueService });
    const [valueServiceObj, setValueService1] = useLocalStorageService<{ prop?: string }>('serviceObj');
    const [useLocalStorageUseSyncExternalStoreState, setUseLocalStorageUseSyncExternalStoreState] =
        useLocalStorageUseSyncExternalStore('useLocalStorageUseSyncExternalStore', '');

    // https://react.dev/reference/react/useSyncExternalStore#im-getting-an-error-the-result-of-getsnapshot-should-be-cached
    // значение, возвращаемое getSnapshot, должно быть иммутабельным. Это означает, что мы не может возвращать, например, массивы или объекты.
    // const [useLocalStorageUseSyncExternalStoreStateObj, setUseLocalStorageUseSyncExternalStoreStateObj] =
    //     useLocalStorageUseSyncExternalStore('useLocalStorageUseSyncExternalStoreObj', { prop: '' });

    return (
        <section className={styles.childHost}>
            <article>
                <h4>Props in Child2</h4>
                <p>Работает, но надо передавать и value и setValue из родителя вглубь всех чайлдов</p>
                <input value={parentProp} onChange={e => setValue(e.target.value)} type='text' />
            </article>
            <article>
                <h4>valueInner works only in component:</h4>
                <p>
                    Проблемный пример использую обычный useLocalStorage и да меняется значение в localStorage но не
                    меняется в sibling
                </p>
                <input value={valueInner} onChange={e => setValueInner(e.target.value)} type='text' />
            </article>
            <article>
                <h4>useSyncExternalStoreState solves the problem:</h4>
                <p>Правильный пример c useSyncExternalStoreState</p>
                <input
                    value={useLocalStorageUseSyncExternalStoreState || ''}
                    onChange={e => setUseLocalStorageUseSyncExternalStoreState(e.target.value)}
                    type='text'
                />
            </article>
            {/*<article>*/}
            {/*    <h4>useSyncExternalStoreState:</h4>*/}
            {/*    <p>Правильный пример c объектом в useSyncExternalStoreState</p>*/}
            {/*    <input*/}
            {/*        value={useLocalStorageUseSyncExternalStoreStateObj?.prop}*/}
            {/*        onChange={e => setUseLocalStorageUseSyncExternalStoreStateObj({ prop: e.target.value })}*/}
            {/*        type='text'*/}
            {/*    />*/}
            {/*</article>*/}
            <article>
                <h4>valueService solves the problem:</h4>
                <p>Правильный пример c valueService</p>
                <input value={valueService || ''} onChange={e => setValueService(e.target.value)} type='text' />
            </article>
            <article>
                <h4>valueServiceObj:</h4>
                <p>Правильный пример c объектом в valueService</p>
                <input
                    value={valueServiceObj?.prop}
                    onChange={e => setValueService1({ prop: e.target.value })}
                    type='text'
                />
            </article>
        </section>
    );
}

export default memo(StorageHookProblem);
