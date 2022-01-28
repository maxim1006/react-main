import React, { memo, FC } from 'react';
import TreesImage from '@app/assets/images/Trees.png';
import MountainsImage from '@app/assets/images/Mountain.png';
import styles from './parallax.module.scss';

type ParallaxProps = {};

const Parallax: FC<ParallaxProps> = () => {
    return (
        <div className={styles.wrapper}>
            <header>
                <img alt='mountains' src={MountainsImage} className={styles.background} />
                <img alt='trees' src={TreesImage} className={styles.foreground} />
                <h1 className={styles.title}>Welcome!</h1>
            </header>
            <section className={styles.section}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus distinctio error libero, maxime nam
                necessitatibus odio quam quos. Assumenda in maiores neque officia quae quas quasi sequi similique sint!
                Dicta eaque id nulla possimus. Accusamus doloribus exercitationem minus pariatur tenetur. Ad consequatur
                earum explicabo fugiat harum id necessitatibus numquam, suscipit?
            </section>
        </div>
    );
};

export default memo(Parallax);
