import { memo, useEffect, useState } from 'react';
import styles from './picture-image-set.module.scss';
import cat1X from '../../../assets/images/cat@1x.webp';
import cat2X from '../../../assets/images/cat@2x.webp';

type PictureImageSetProps = {};

const PictureImageSet = memo<PictureImageSetProps>(() => {
    const [text, setText] = useState('');

    useEffect(() => {
        const onResize = function () {
            setText(`Width: ${window.innerWidth}, Ratio: ${window.devicePixelRatio}`);
        };

        window.addEventListener('resize', onResize);

        return () => window.removeEventListener('resize', onResize);
    }, []);

    return (
        <>
            {text}
            {/*400w - это 400px,
            при ресайзе браузер будет подстраивать нужную картинку относительно srcSet, нужно поресайзить браузер чтобы увидеть результат
            Если img только 50vw то будет использован srcSet в 2 раза больше (для 800 - 1600w) чтобы отмасштабировать img
            нужно добавить sizes (пример sizes="(max-width: 800px) 100vw, (max-width: 500px) 50vw, 1200px", тот media query который будет true первым - побеждает)
            */}
            <img
                style={{ width: '50vw' }}
                src={require('../../../assets/images/1.jpg')}
                sizes='50vw'
                srcSet={`
                     https://placehold.co/1600x400/EEE/31343C 1600w,
                     https://placehold.co/800x200/EEE/31343C 800w,
                     https://placehold.co/400x100/EEE/31343C 400w
                `}
                alt='Рыжий кот нюхает штанину.'
            />
            <picture>
                {/*<source*/}
                {/*    type='image/avif'*/}
                {/*    srcSet='../../../assets/images/cat@1x.avif 1x, ../../../assets/images/cat@2x.avif 2x'*/}
                {/*/>*/}
                <source type='image/webp' media='(max-width: 767px)' srcSet={`${cat1X}`} />
                <source type='image/webp' media='(min-width: 768px)' srcSet={`${cat2X}`} />
                <img
                    className={styles.picture}
                    width='500'
                    height='500'
                    src='../../../assets/images/cat@1x.jpg'
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
