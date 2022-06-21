import { useCallback, useState } from 'react';

export function useStateWithValidation<T>(validationFunc: (arg: T) => boolean, initialValue: T) {
    const [state, setState] = useState(initialValue);
    const [isValid, setIsValid] = useState(() => validationFunc(state));

    const onChange = useCallback(
        (nextState: any) => {
            const value = typeof nextState === 'function' ? nextState(state) : nextState;
            setState(value);
            setIsValid(validationFunc(value));
        },
        [validationFunc, state]
    );

    return [state, onChange, isValid];
}
