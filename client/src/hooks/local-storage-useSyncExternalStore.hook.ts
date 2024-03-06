import { Dispatch, SetStateAction, useCallback, useEffect, useSyncExternalStore } from 'react';

/**
 * Hook for working with the localeStorage
 *
 * Usage:
 *
 * 1) Easy to use
 * const [state, setState] = useLocalStorageUseSyncExternalStore('key', 'defaultValue');
 *
 * 2) Example of deleting a value from a store
 * setState(undefined)
 *
 */
export function useLocalStorageUseSyncExternalStore<T>(
    key: string,
    initialValue: T,
): [T | undefined, Dispatch<SetStateAction<T | undefined>>] {
    const getSnapshot = () => readFromLocalStorage<T>(key);

    const store = useSyncExternalStore(useLocalStorageSubscribe, getSnapshot, getLocalStorageServerSnapshot);

    const setState = useCallback(
        (setNewValue: SetStateAction<T | undefined>) => {
            const nextState = setNewValue instanceof Function ? setNewValue(store) : setNewValue;

            if (nextState === undefined || nextState === null) {
                removeLocalStorageItem(key);
            } else {
                setLocalStorageItem(key, nextState);
            }
        },
        [key, store],
    );

    useEffect(() => {
        if (readFromLocalStorage(key) === null && typeof initialValue !== 'undefined') {
            setLocalStorageItem(key, initialValue);
        }
    }, [key, initialValue]);

    if (typeof window === 'undefined') {
        return [initialValue, (): void => {}];
    }

    return [store, setState];
}

// helpers
const useLocalStorageSubscribe = (callback: () => void) => {
    if (typeof window === 'undefined') {
        return () => {};
    }

    window.addEventListener('storage', callback);
    return () => window.removeEventListener('storage', callback);
};

const readFromLocalStorage = <T>(itemKey: string): T | undefined => {
    if (typeof window === 'undefined') {
        return;
    }

    try {
        const value = JSON.parse(window.localStorage.getItem(itemKey) || 'null');

        return value ?? '';
    } catch (e) {
        console.error('Error while retrieving from the LocalStorage ', e);
    }
};
const setLocalStorageItem = <T>(key: string, value: T): void => {
    if (typeof window === 'undefined') {
        return;
    }

    try {
        const stringifiedValue = JSON.stringify(value);
        window.localStorage.setItem(key, stringifiedValue);
        dispatchStorageEvent(key, stringifiedValue);
    } catch (e) {
        console.error('Error while writing to the LocalStorage ', e);
    }
};

const removeLocalStorageItem = (key: string): void => {
    if (typeof window === 'undefined') {
        return;
    }

    try {
        window.localStorage.removeItem(key);
        dispatchStorageEvent(key, null);
    } catch (e) {
        console.error('Error while retrieving from the LocalStorage ', e);
        return;
    }
};

const dispatchStorageEvent = <T extends string | null | undefined>(key: string, newValue: T): void => {
    if (typeof window === 'undefined') {
        return;
    }

    window.dispatchEvent(new StorageEvent('storage', { key, newValue }));
};

const getLocalStorageServerSnapshot = () => {
    return undefined;
};
