import { useEffect, useState } from 'react';

export const useSessionStorage = (propName = 'storage') => {
    const [currentValue, setCurrentValue] = useState<Record<string, any>>();
    const [currentSessionStorage, setCurrentSessionStorage] = useState(() => {
        try {
            return JSON.parse(window.sessionStorage.getItem(propName) || 'null') || {};
        } catch (e) {
            console.error('useSessionStorage error ', e);
        }
    });

    useEffect(() => {
        try {
            const val = JSON.parse(window.sessionStorage.getItem(propName) || 'null');
            const merged = { ...val, ...currentValue };
            setCurrentSessionStorage(merged);
            sessionStorage.setItem(propName, JSON.stringify(merged));
        } catch (e) {
            console.error('useSessionStorage error ', e);
        }
    }, [currentValue, propName]);

    return [currentSessionStorage, setCurrentValue];
};
