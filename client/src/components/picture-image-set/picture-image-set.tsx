import { memo } from 'react';
import styles from './picture-image-set.module.scss';
import cat1X from '../../assets/images/cat@1x.webp';
import cat2X from '../../assets/images/cat@2x.webp';

type PictureImageSetProps = {};

const PictureImageSet = memo<PictureImageSetProps>(() => {
    return (
        <>
            <picture>
                {/*<source*/}
                {/*    type='image/avif'*/}
                {/*    srcSet='../../assets/images/cat@1x.avif 1x, ../../assets/images/cat@2x.avif 2x'*/}
                {/*/>*/}
                <source type='image/webp' media='(max-width: 767px)' srcSet={`${cat1X}`} />
                <source type='image/webp' media='(min-width: 768px)' srcSet={`${cat2X}`} />
                <img
                    className={styles.picture}
                    width='500'
                    height='500'
                    src='../../assets/images/cat@1x.jpeg'
                    alt='Рыжий кот нюхает штанину.'
                />
            </picture>
            <article className={styles.feature}>
                <h2 className={styles.feature__title}>
                    <a className={styles.feature__link} href='/'>
                        Кот понюхал штанину
                    </a>
                </h2>
            </article>
        </>
    );
});

export default PictureImageSet;
