import React, { memo, useRef } from 'react';
import cn from 'classnames';
import styles from './resize-overflow.module.scss';
import { useOverflow } from '@app/hooks/overflow.hook';

type ResizeOverflowProps = {};

const ResizeOverflow = memo<ResizeOverflowProps>(function ResizeOverflow() {
    const ref = useRef<HTMLUListElement>(null!);
    const refVertical = useRef<HTMLUListElement>(null!);

    const { isLeftSideOverflown, isRightSideOverflown } = useOverflow(ref);
    const { isTopSideOverflown, isBottomSideOverflown } = useOverflow(refVertical);

    return (
        <>
            <h3>Horizontal</h3>
            <ul
                className={cn(styles.wrapper, {
                    [styles.withRightGradient]: isRightSideOverflown,
                    [styles.withLeftGradient]: isLeftSideOverflown,
                })}
                ref={ref}
            >
                <li className={styles.li}>1</li>
                <li className={styles.li}>2</li>
                <li className={styles.li}>3</li>
                <li className={styles.li}>4</li>
                <li className={styles.li}>5</li>
            </ul>

            <h3>Vertical</h3>
            <ul
                className={cn(styles.wrapperVertical, {
                    [styles.withTopGradient]: isTopSideOverflown,
                    [styles.withBottomGradient]: isBottomSideOverflown,
                })}
                ref={refVertical}
            >
                <li className={styles.li}>1</li>
                <li className={styles.li}>2</li>
                <li className={styles.li}>3</li>
                <li className={styles.li}>4</li>
                <li className={styles.li}>5</li>
            </ul>
        </>
    );
});

export default ResizeOverflow;
