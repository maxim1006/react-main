import React, { FC, memo } from 'react';
import styles from './tg-header.module.scss';
import cn from 'classnames';
import { useTg } from '@app/hooks/tg.hook';
import TgButton from '@app/components/tg-button/tg-button.component';

type TgHeaderContainerProps = {};

const TgHeaderContainer: FC<TgHeaderContainerProps> = () => {
    const { onClose, user } = useTg();

    return (
        <div className={cn(styles.host, 'taTgHeaderContainer')}>
            {user?.username} please click when you finish:
            <TgButton onClick={onClose}>Закрыть</TgButton>
        </div>
    );
};

export default memo(TgHeaderContainer);
