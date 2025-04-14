import React, { memo, FC, useEffect, useCallback, useMemo } from 'react';
import cn from 'classnames';
import { getRandomIntInclusive } from '@app/common/utils/common.utils';
import { localStorageApi } from '@app/store/local-storage/local-storage.api';

type LocalStorageRtkProps = {};

const LocalStorageRtk: FC<LocalStorageRtkProps> = () => {
    const { value: val, set } = useLocalStorageRtk<string>('_rtk-local-storage_');
    const { value: val2 } = useLocalStorageRtk<string>('_rtk-local-storage_');

    useEffect(() => {
        const i = setInterval(() => {
            set(JSON.stringify({ t: getRandomIntInclusive(0, 100) }));
        }, 2_000);
        return () => clearInterval(i);
    }, [set]);

    return (
        <div className={cn('taLocalStorageRtk')}>
            val: {JSON.parse(val ?? 'null')?.t} <br />
            val2: {JSON.parse(val2 ?? 'null')?.t} <br />
        </div>
    );
};

function useLocalStorageRtk<T extends string>(
    key: string,
): { value: T | null; set: (value: T) => void; remove: () => void } {
    const { currentData = null } = localStorageApi.useGetLocalStorageItemQuery(key);
    const [setLocalStorageItem] = localStorageApi.useSetLocalStorageItemMutation();
    const [removeLocalStorageItem] = localStorageApi.useRemoveLocalStorageItemMutation();

    const set = useCallback((value: T) => setLocalStorageItem({ key, value }), [setLocalStorageItem, key]);
    const remove = useCallback(() => removeLocalStorageItem(key), [key, removeLocalStorageItem]);

    return useMemo(
        () => ({
            value: currentData as T,
            set,
            remove,
        }),
        [currentData, remove, set],
    );
}

export default memo(LocalStorageRtk);
