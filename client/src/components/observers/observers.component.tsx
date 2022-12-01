import React, { FC, memo, useCallback, useState } from 'react';
import useResizeObserver from '@app/hooks/resize-observer.hook';
import styles from './observers.module.scss';
import useIntersectionObserver from '@app/hooks/intersection-observer.hook';

type MyObserversProps = {};

const MyObservers: FC<MyObserversProps> = () => {
    const [intersecting, setIntersecting] = useState<boolean>();

    const resizeCallback = useCallback((element: HTMLDivElement) => {
        console.log('resizeCallback ', element);
    }, []);

    const intersectCallback = useCallback((entry: IntersectionObserverEntry) => {
        setIntersecting(entry.isIntersecting);
        console.log('isIntersecting ', entry.isIntersecting);
    }, []);

    const obsRef = useResizeObserver<HTMLDivElement>(resizeCallback);
    const obsRefIntersection = useIntersectionObserver<HTMLDivElement>(intersectCallback);

    return (
        <>
            <div className={styles.resize} ref={obsRef}>
                Resize observer (Resize window)
            </div>
            <div className={styles.intersectionWrapper}>
                <div className={styles.intersect} ref={obsRefIntersection}>
                    Intersected block
                </div>
                <div className={styles.intersectValue}>Intersecting {String(!!intersecting)}</div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum eligendi fugit libero magnam nam nemo
                non, quasi ratione. Eius et id illo ipsum laborum molestias provident quia quibusdam tenetur ut.
            </div>
        </>
    );
};

export default memo(MyObservers);
