import { useSelector } from 'react-redux';
import { useMemo } from 'react';

export function useMemoSelector<TState = unknown, TSelected = unknown, TArgs = any>(
    selector: () => (state: TState, ...args: TArgs[]) => TSelected,
    ...args: TArgs[]
) {
    const memoSelector = useMemo(selector, [selector]);
    return useSelector((state: TState) => memoSelector(state, ...args));
}

// пример неверной  мемоизации селектора
// export const useShortsItemById = (videoId?: string) => {
//     return useSelector(
//         useMemo(
//             () =>
//                 (state: AppState): IVideo | undefined =>
//                     videoId ? shortsItemByIdSelector(state, videoId) : undefined,
//             [videoId]
//         )
//     );
// };

// пример верной
// Вынести вне компонента
// const makeShortsItemSelector = (videoId?: string) => (state: AppState) =>
//     videoId ? shortsItemByIdSelector(state, videoId) : undefined;
//
// // В компоненте
// export const useShortsItemById = (videoId?: string) => {
//     const selector = useMemo(() => makeShortsItemSelector(videoId), [videoId]);
//     return useSelector(selector);
// };
