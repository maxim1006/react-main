import React, { memo, FC, useState } from 'react';
import styles from './css-scrollbar-gutter.module.scss';
import cn from 'classnames';

type CssScrollbarGutterProps = {};

const CssScrollbarGutter: FC<CssScrollbarGutterProps> = () => {
    const [overflow, setOverflow] = useState(false);

    return (
        <div className={cn(styles.host, 'taCssScrollbarGutter')}>
            <div className={cn(overflow ? styles.overflowAuto : styles.overflowHidden)}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores atque commodi cum dolor
                doloribus ea fugit harum incidunt ipsam itaque iusto mollitia, non, odio placeat quibusdam ratione saepe
                sint veritatis voluptatum? Cum debitis distinctio, doloremque excepturi facere fugit ipsum laboriosam
                mollitia nam, non odio porro reiciendis reprehenderit soluta temporibus?
            </div>

            <button onClick={() => setOverflow(i => !i)}>toggle overflow</button>
        </div>
    );
};

export default memo(CssScrollbarGutter);
