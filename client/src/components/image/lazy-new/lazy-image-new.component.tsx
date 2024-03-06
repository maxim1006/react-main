import React, { FC, memo, useLayoutEffect, useRef } from 'react';
import styles from './lazy-image-new.module.scss';
import cn from 'classnames';

type LazyImageNewProps = {};

const images = [
    '/images/1.webp',
    '/images/1.webp',
    '/images/1.webp',
    '/images/1.webp',
    '/images/1.webp',
    '/images/1.webp',
    '/images/2.webp',
    '/images/2.webp',
    '/images/2.webp',
    '/images/2.webp',
    '/images/2.webp',
    '/images/2.webp',
    '/images/Mountain.png',
    '/images/Trees.png',
];

const LazyImageNew: FC<LazyImageNewProps> = () => {
    const ref = useRef<HTMLImageElement[]>([]);

    useLayoutEffect(() => {
        ref.current.forEach(i => {
            function loaded() {
                i.classList.remove('hidden');
            }

            if (i.complete) {
                loaded();
            } else {
                i.addEventListener('load', loaded);
            }
        });
    }, []);

    return (
        <div className={cn('taLazyImageNew', styles.host)}>
            {images.map((i, idx) => {
                return (
                    <div
                        // eslint-disable-next-line react/no-array-index-key
                        key={idx}
                        className='blur-load'
                        style={{
                            backgroundImage: `url(/images/1-blurred.png)`,
                        }}
                    >
                        <img
                            className='hidden'
                            ref={el => {
                                if (el) ref.current[idx] = el;
                            }}
                            loading='lazy'
                            src={i}
                            alt=''
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default memo(LazyImageNew);
