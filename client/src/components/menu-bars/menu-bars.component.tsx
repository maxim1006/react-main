import React, { FC, memo, useState } from 'react';
import styles from './menu-bars.module.scss';
import cn from 'classnames';

type MenuBarsProps = {};

const MenuBars: FC<MenuBarsProps> = () => {
    const [open, setOpen] = useState<boolean>();

    return (
        <div onClick={() => setOpen(i => !i)} className={cn(styles.host, 'taMenuBars', { [styles._open]: open })}>
            {[...Array(3)].map((_, idx) => (
                // если не поставить будет ругань на ключи - индексы
                // eslint-disable-next-line
                <div key={idx} className={styles.menuBar}></div>
            ))}
        </div>
    );
};

export default memo(MenuBars);
