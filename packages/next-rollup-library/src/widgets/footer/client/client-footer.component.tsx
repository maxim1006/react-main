'use client';

import { memo, FC, useEffect } from 'react';
import styles from './client-footer.module.scss';
import cn from 'classnames';

type ClientFooterProps = {};

const ClientFooter: FC<ClientFooterProps> = () => {
    useEffect(() => {
        console.warn('useEffect from taClientFooter');
    }, []);

    return (
        <div className={cn(styles.host, 'taClientFooter')}>
            <div className={styles.div}>ClientFooter+++++</div>
        </div>
    );
};

export default memo(ClientFooter);
