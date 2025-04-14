import { useCallback, useRef } from 'react';
import { useIsomorphicLayoutEffect } from '@app/hooks/use-isomorphic-layout-effect';

/**
 * Все мы привыкли пользоваться хуком useCallback, который кеширует функцию между ре-рендерами.
 *
 * Однако, если в массиве зависимостей этой функции будут значения, которые изменились - функция будет создана заново.
 *
 * С точки зрения оптимизации производительности это может быть излишним, так как ваш коллбэк мог так ни разу и не быть вызванным.
 *
 * Если вы хотите получить стабильную ссылку на коллбэк, который не меняется от рендера к рендеру, но при этом в момент вызова всегда содержит актуальные значения переменных, от которых он зависит, то вы можете воспользоваться следующим хуком:
 *
 * @param fn
 */
export function useEventCallback<I extends unknown[], O>(fn: (...args: I) => O): (...args: I) => O {
    const ref = useRef<(...args: I) => O>();

    useIsomorphicLayoutEffect(() => {
        ref.current = fn;
    });

    return useCallback((...args) => {
        const { current } = ref;

        if (current == null) throw new Error('useEventCallback must be called from event handlers');

        return current(...args);
    }, []);
}
