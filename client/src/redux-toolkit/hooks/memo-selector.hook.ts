import { useSelector } from 'react-redux';
import { useMemo } from 'react';

export function useMemoSelector<TState = unknown, TSelected = unknown, TArgs = any>(
    selector: () => (state: TState, ...args: TArgs[]) => TSelected,
    ...args: TArgs[]
) {
    const memoSelector = useMemo(selector, [selector]);
    return useSelector((state: TState) => memoSelector(state, ...args));
}
