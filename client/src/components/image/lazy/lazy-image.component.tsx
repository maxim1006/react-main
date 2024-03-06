import React, { FC, memo, useCallback, useRef, useState } from 'react';

type LazyImageProps = {};

const LazyImage: FC<LazyImageProps> = () => {
    const ref = useRef<HTMLInputElement>(null!);
    const [imgSrc, setImgSrc] = useState('');

    const loadImage = useCallback(async () => {
        const image = await import(`/src/assets/images/${ref.current.value}.jpg`);
        setImgSrc(image.default);
    }, []);

    return (
        <div>
            <input type='text' ref={ref} />
            <button type='button' onClick={loadImage}>
                Load image
            </button>
            <img src={imgSrc} alt='' />
        </div>
    );
};

export default memo(LazyImage);
