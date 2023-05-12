import React, { memo, FC } from 'react';
import styles from './tg-shop.module.scss';
import cn from 'classnames';

type TgShopProps = {};

const TgShop: FC<TgShopProps> = () => {
    return (
        <div className={cn(styles.host, 'taTgShop')}>
            <div className={styles.product}>
                <div className={styles.product}></div>
            </div>
        </div>
    );
};

export default memo(TgShop);
