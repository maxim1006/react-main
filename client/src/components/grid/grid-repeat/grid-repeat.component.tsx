import React, { FC, memo } from 'react';
import styles from './grid-repeat.module.scss';
import cn from 'classnames';
import { generateUUID } from '@app/common/utils/generate.utils';

type GridRepeatProps = {};

// тут прикольно что чайлды растягиваются до определенного значения + распологаются заполняя все пространство + последний ряд слева (в отличии от флексов)
// Auto-fit в отличие от Auto-fill займет все пространство
// auto-fit - подстроит размер текущих чайлдов грида под родителя
// auto-fill - достроит пустые блоки в строку
const GridRepeat: FC<GridRepeatProps> = () => {
    return (
        <div className={cn(styles.host, 'taGridRepeat')}>
            <h3>Auto-fill 5</h3>
            <div className={styles.grid}>
                {[...Array(5)].map(_ => (
                    <div key={generateUUID()} className={styles.child}>
                        Child
                    </div>
                ))}
            </div>

            <h3>Auto-fill 3</h3>
            <div className={styles.grid}>
                {[...Array(3)].map(_ => (
                    <div key={generateUUID()} className={styles.child}>
                        Child
                    </div>
                ))}
            </div>

            <h3>Auto-fit 5</h3>
            <div className={styles.gridFit}>
                {[...Array(5)].map(_ => (
                    <div key={generateUUID()} className={styles.child}>
                        Child
                    </div>
                ))}
            </div>

            <h3>Auto-fit 3</h3>
            <div className={styles.gridFit}>
                {[...Array(3)].map(_ => (
                    <div key={generateUUID()} className={styles.child}>
                        Child
                    </div>
                ))}
            </div>

            <h3>Place items</h3>
            <div className={styles.gridPlaceItems}>centered</div>
        </div>
    );
};

export default memo(GridRepeat);
