import React, { FC, memo } from 'react';
import imgSrc3 from '/src/assets/images/3.webp';
import styles from './image.module.scss';

type MyImageProps = {};

const MyImage: FC<MyImageProps> = () => {
    return (
        <div>
            {/*пример image из assets*/}
            <div className='blur-load'>
                {/*жесть как можно так извратиться, но если хочу из common то вот так*/}
                <img src={require('/src/assets/images/1.webp')} loading='lazy' alt='' />
            </div>
            {/*пример image из public*/}
            <div className='blur-load'>
                {/*из public отработает*/}
                <img src='/images/2.webp' alt='' loading='lazy' />
            </div>

            {/*пример image из import*/}
            <div className='blur-load'>
                <img src={imgSrc3} alt='' loading='lazy' />
            </div>

            {/*пример image из стилей*/}
            <div className={styles.cssImage} />
        </div>
    );
};

export default memo(MyImage);
