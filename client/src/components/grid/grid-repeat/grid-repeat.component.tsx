import React, { FC, memo } from 'react';
import styles from './grid-repeat.module.scss';
import cn from 'classnames';
import { generateUUID } from '@app/common/utils/generate.utils';

type GridRepeatProps = {};

// тут прикольно что чайлды растягиваются до определенного значения + распологаются заполняя все пространство + последний ряд слева (в отличии от флексов)
const GridRepeat: FC<GridRepeatProps> = () => {
    return (
        <div className={cn(styles.host, 'taGridRepeat')}>
            <div className={styles.grid}>
                {[...Array(5)].map(_ => (
                    <div key={generateUUID()} className={styles.child}>
                        Child
                    </div>
                ))}
            </div>
        </div>
    );
};

export default memo(GridRepeat);
