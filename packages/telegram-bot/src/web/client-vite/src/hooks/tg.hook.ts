import { useCallback } from 'react';
import { tg } from '../constants/common.constants';

export function useTg() {
    const onClose = useCallback(() => tg.close(), []);

    const onMainButtonToggle = useCallback(() => {
        if (tg.MainButton.isVisible) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, []);

    return {
        onClose,
        onMainButtonToggle,
        user: tg.initDataUnsafe?.user,
    };
}
