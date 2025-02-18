import React, { FC, memo, useCallback, useEffect, useSyncExternalStore } from 'react';
import cn from 'classnames';
import { defaultMemoize, getRandomIntInclusive } from '@app/common/utils/common.utils';
import { useRunOnce } from '@app/hooks/run-once.hook';

type LocalStorageUseSyncExternalStoreStateProps = {};

const LocalStorageUseSyncExternalStoreState: FC<LocalStorageUseSyncExternalStoreStateProps> = () => {
    const [val, setVal] = useLSValue<{ t: number }>('_test2_', { t: 1000 });
    const [val2] = useLSValue<{ t: number }>('_test2_');
    const [val3, setVal3] = useLSValue<boolean | ((_i: boolean) => boolean)>('_test3_', false);
    const [val4] = useLSValue<boolean>('_test3_', true);

    useEffect(() => {
        const i = setInterval(() => {
            setVal({ t: getRandomIntInclusive(0, 100) });
            setVal3(i => !i);
        }, 2_000);
        return () => clearInterval(i);
    }, [setVal, setVal3]);

    return (
        <div className={cn('taLocalStorageUseSyncExternalStoreState')}>
            val: {val?.t} <br />
            val2: {val2?.t} <br />
            val3: {String(val3)} <br />
            val4: {String(val4)}
        </div>
    );
};

export default memo(LocalStorageUseSyncExternalStoreState);

class LocalStorageService {
    constructor() {
        this.getValue = this.getValue.bind(this);
        this.subscribe = this.subscribe.bind(this);
    }

    private readonly _subscriptions = {} as Record<string, Function[]>;

    private readonly _parsers = {} as Record<string, (val: string) => unknown>;

    public getValue<T>(key: string): T | null {
        this._parsers[key] = this._parsers[key] ?? defaultMemoize((val: string) => JSON.parse(val) as T);

        try {
            const item = window.localStorage.getItem(key);
            if (item) {
                return this._parsers[key](item) as T;
            }
        } catch (e) {
            console.error(e);
        }

        return null;
    }

    public setValue<T>(key: string, value: T | ((prev: T) => void)): void {
        let next: T | null;
        if (typeof value === 'function') {
            next = (value as Function)(this.getValue(key));
        } else {
            next = value;
        }
        try {
            window.localStorage.setItem(key, JSON.stringify(next));
            (this._subscriptions[key] ?? []).forEach(cb => cb());
        } catch (e) {
            console.error(e);
        }
    }

    public subscribe(key: string, onChange: () => void): () => void {
        this._subscriptions[key] = this._subscriptions[key] ?? [];
        this._subscriptions[key].push(onChange);
        console.log('subscribe');
        return () => {
            console.log('unsubscribe');
            this._subscriptions[key] = (this._subscriptions[key] ?? []).filter(i => i !== onChange);
        };
    }
}

function useLSValue<T>(
    key: string,
    initValue?: T | ((prev: T) => void),
): [T | null, (next: T) => void | ((cb: (prev: T) => T) => void)] {
    const getValue = useCallback((): T | null => lsService.getValue(key), [key]);
    const setValue = useCallback((_v: T | ((prev: T) => void)) => lsService.setValue(key, _v), [key]);
    const subscribe = useCallback((onChange: () => void) => lsService.subscribe(key, onChange), [key]);

    useRunOnce()(() => {
        if (initValue) setValue(initValue);
    });

    const val = useSyncExternalStore<T | null>(subscribe, getValue, () => null);

    return [val, setValue];
}

const lsService = new LocalStorageService();
