import React, { FC, memo, useEffect, useRef, useState } from 'react';
import './grid.scss';
import img1 from '../../../assets/images/1.jpg';
import img2 from '../../../assets/images/2.jpg';
import img3 from '../../../assets/images/3.jpg';
import img4 from '../../../assets/images/4.jpg';
import img5 from '../../../assets/images/5.jpg';
import img6 from '../../../assets/images/6.jpg';
import img7 from '../../../assets/images/7.jpg';
import img8 from '../../../assets/images/8.jpg';
import { generateUUID } from '@app/common/utils/generate.utils';

type GridProps = {};

const Grid: FC<GridProps> = () => {
    const images = [img1, img2, img3, img4, img5, img6, img7, img8];

    const [counter, setCounter] = useState(0);

    const onLoad: React.ReactEventHandler<HTMLImageElement> = e => {
        console.log(e.target);
    };

    return (
        <>
            <div
                onClick={() => {
                    setCounter(counter + 1);
                    console.log(counter);
                }}
            >
                click
                {counter}
            </div>
            <div className='grid'>
                {images.map((img, index) => {
                    // return <DomRefImageComponent image={img} key={index} onLoad={onLoad}/>
                    return <DomRefImageHooks src={img} key={generateUUID()} onLoad={onLoad} />;
                })}
            </div>
        </>
    );
};

export default memo(Grid);

function DomRefImageHooks({ className, ...restProps }: any): JSX.Element {
    const ref = useRef<HTMLImageElement>(null!);
    const currentClassName = `dom-ref-image ${className || ''}`;

    useEffect(() => {
        const refCurrent = ref.current;

        if (refCurrent) {
            refCurrent.onload = () => {
                refCurrent.style.gridRowEnd = `span ${refCurrent.clientHeight}`;
            };
        }

        return () => {
            console.log('DomRefImageHooks cleared when component destroyed');
        };
    }, []);

    return <img alt='my' loading='lazy' ref={ref} className={currentClassName} {...restProps} />;
}
