import React, { useCallback, useEffect, useState } from 'react';
import { localStorageService } from '@app/services/storage.service';

export const useLocalStorage = <T>(
    propName: string,
): [T | undefined | null, React.Dispatch<React.SetStateAction<T | undefined | null>>] => {
    const [currentLocalStorage, setCurrentLocalStorage] = useState<T | undefined | null>(() =>
        localStorageService.readFromStorage(propName),
    );

    const setValue = useCallback(
        (value: React.SetStateAction<T | null | undefined>) => {
            const valueToStore = value instanceof Function ? value(currentLocalStorage) : value;
            localStorageService.writeToStorage(propName, valueToStore);
        },
        [propName, currentLocalStorage],
    );

    useEffect(() => {
        const listener = (propValue: T) => setCurrentLocalStorage(propValue);

        const id = localStorageService.addStorageChangesListener(propName, listener);

        return () => localStorageService.removeStorageChangesListener(id);
    }, [setCurrentLocalStorage, propName]);

    return [currentLocalStorage, setValue];
};
