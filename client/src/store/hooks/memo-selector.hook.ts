import { useSelector } from 'react-redux';
import { useMemo } from 'react';

export function useMemoSelector<TState = unknown, TSelected = unknown, TArgs = any>(
    selector: () => (state: TState, ...args: TArgs[]) => TSelected,
    ...args: TArgs[]
) {
    const memoSelector = useMemo(selector, [selector]);
    return useSelector((state: TState) => memoSelector(state, ...args));
}

// docs
// https://react-redux.js.org/api/hooks#using-memoizing-selectors
// https://reselect.js.org/faq/#can-i-share-a-selector-across-multiple-component-instances

// Стандартный подход (if selector depends on the component's props, but will only ever be used in a single instance of a single component)
/*const selectCompletedTodosCount = createSelector(
    (state) => state.todos,
    (todos, completed) =>
        todos.filter((todo) => todo.completed === completed).length,
)

export const CompletedTodosCount = ({ completed }) => {
    const matchingCount = useSelector((state) =>
        selectCompletedTodosCount(state, completed),
    )

    return <div>{matchingCount}</div>
}*/

// Пример использования с createSelector и useMemo (если используется в нескольких компонентах)
/*const mediaQueryMatchSelector = (query: string) => createSelector(selector, (list) => false;

const memoMediaQueryMatchSelector = useMemo(() => mediaQueryMatchSelector(query), [query]);

const memoSelector = useSelector(memoMediaQueryMatchSelector);*/

/* Пример c  LRU-кешем (Least Recently Used) - более масштабируемое и надёжное решение, особенно когда:
	•	компонент перерисовывается часто,
	•	аргументы приходят из списка или динамики,
    •	Если есть дорогие вычисления

lruMemoize мемоизирует не результат вычисления, а сам селектор, созданный с аргументом.
Это нужно, когда ты создаёшь динамические селекторы, зависящие от параметров (id, query, slug и т.д.), и таких селекторов много. Если вызвать без lruMemoize то получу 100 селекторов с независимым кешем, а с lruMemoize сли такой селектор уже был, он берётся из кэша.

import { lruMemoize } from '@reduxjs/toolkit';

// 1. Создаём селектор с аргументом
const baseSelector = (state: any) => state.users;

const makeSelectUserById = lruMemoize(
    (userId: string) =>
        createSelector(
            [baseSelector],
            (users) => users.find(user => user.id === userId)
        ),
    {
        maxSize: 50, // кэш максимум на 50 уникальных userId
    }
);

// 2. Используем в компоненте
const user = useSelector((state) => makeSelectUserById(userId)(state));*/

// Общая информация
// При вызове makeSelectUserById('123') — если такой селектор уже был, он берётся из кэша.
// Один и тот же селектор переиспользуется в разных местах, даже в разных компонентах.
// Внутренний createSelector сохраняет кэш на уровне id.
// И ты не пересоздаёшь селектор при каждом рендере или вызове.

// пример неверной  мемоизации селектора
/*export const useShortsItemById = (videoId?: string) => {
    return useSelector(
        useMemo(
            () =>
                (state: AppState): IVideo | undefined =>
                    videoId ? shortsItemByIdSelector(state, videoId) : undefined,
            [videoId]
        )
    );
};*/
/*
 * вот исправленный вариант*/
/*Вынести вне компонента
/* export const shortsItemByIdSelector = createSelector(
    [(state: AppState) => state.shorts.items, (state: AppState, videoId?: string) => videoId],
    (items, videoId) => {
        return videoId ? items[videoId] : undefined;
    }
);

// В компоненте
export const useShortsItemById = (videoId?: string) => {
    return useSelector((state: AppState) => shortsItemByIdSelector(state, videoId));
};
 */
//  Объяснение
// Анонимная функция (state) => ... — действительно новая при каждом рендере.
//     Но! Главное — shortsItemByIdSelector — это мемоизированная функция из createSelector.
//     Она кэширует результат на основе своих входов: state и videoId.
//     Если state.shorts.items и videoId не изменились → возвращает ту же самую ссылку на объект (кешированный результат).
// useSelector сравнивает результаты по значению (или ссылке) → видит, что не изменились → не вызывает перерисовку.
