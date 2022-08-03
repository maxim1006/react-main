import React, { useCallback, useEffect, useState } from 'react';
import storageService from '@app/services/storage.service';

export const useLocalStorageService = <T>(
    propName: string
): [T | undefined | null, React.Dispatch<T | undefined | null>] => {
    const [value, setValue] = useState<T | undefined | null>(() => storageService.read(propName));

    const setCurrentValue = useCallback(
        (val: T | null | undefined) => {
            const valueToStore = typeof val === 'function' ? val(value) : val;
            storageService.write(propName, valueToStore);
        },
        [propName, value]
    );

    useEffect(() => {
        const listener = (propValue: T) => setValue(propValue);

        storageService.addListener(propName, listener);

        return () => storageService.removeListener(propName, listener);
    }, [propName]);

    return [value, setCurrentValue];
};
