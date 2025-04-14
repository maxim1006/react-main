import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export function useDerivedState<T>(propValue: T): [T, Dispatch<SetStateAction<T>>] {
    const [state, setState] = useState(propValue);

    useEffect(() => {
        setState(propValue);
    }, [propValue]);

    return [state, setState];
}
