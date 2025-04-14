import { Dispatch, SetStateAction, useCallback, useState } from 'react';

export function useToggle(defaultValue?: boolean): [boolean, () => void, Dispatch<SetStateAction<boolean>>] {
    const [value, setValue] = useState(!!defaultValue);

    const toggle = useCallback(() => setValue(i => !i), []);

    return [value, toggle, setValue];
}
