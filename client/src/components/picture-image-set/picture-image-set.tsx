import React, { memo } from 'react';
import styles from './picture-image-set.module.scss';
import cat1X from '../../assets/images/cat@1x.webp';
import cat2X from '../../assets/images/cat@2x.webp';

type PictureImageSetProps = {};

const PictureImageSet = memo<PictureImageSetProps>(() => {
    console.log(cat1X);
    return (
        <>
            <picture>
                <source
                    type="../../assets/images/avif"
                    srcSet="../../assets/images/cat@1x.avif 1x, ../../assets/images/cat@2x.avif 2x"
                />
                <source type="image/webp" srcSet={`${cat1X} 1x, ${cat2X} 2x`} />
                <img
                    className={styles.picture}
                    width="500"
                    height="500"
                    src="../../assets/images/cat@1x.jpeg"
                    srcSet="../../assets/images/cat@2x.jpeg 2x"
                    alt="Рыжий кот нюхает штанину."
                />
            </picture>
            <article className={styles.feature}>
                <h2 className={styles.feature__title}>
                    <a className={styles.feature__link} href="/">
                        Кот понюхал штанину
                    </a>
                </h2>
            </article>
        </>
    );
});

export default PictureImageSet;
