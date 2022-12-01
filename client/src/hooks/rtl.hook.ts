import { useMemo } from 'react';

export enum DirectionEnum {
    Dir = 'dir',
    Ltr = 'ltr',
    Rtl = 'rtl',
}

type DirectionType = 'ltr' | 'rtl' | undefined;

export function useRtl() {
    const direction = useMemo(
        () => (document.documentElement.getAttribute(DirectionEnum.Dir) ?? DirectionEnum.Ltr) as DirectionType,
        []
    );

    return {
        direction,
        isRtl: direction === DirectionEnum.Ltr,
    };
}
