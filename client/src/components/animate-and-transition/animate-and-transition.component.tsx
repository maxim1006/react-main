import React, { FC, memo } from 'react';
import styles from './animate-and-transition.module.scss';

type AnimateAndTransitionProps = {};

enum AnimationTypeEnum {
    Shake = 'shake',
    Dance = 'dance',
}

const AnimateAndTransition: FC<AnimateAndTransitionProps> = () => {
    const runAnimation = (e: React.MouseEvent) => {
        const target = e.target as HTMLDivElement;
        const dataStyle = styles[target.dataset.animation];
        e.persist();
        target.classList.add(dataStyle);
        target.addEventListener('animationend', () => target.classList.remove(dataStyle), {
            once: true,
        });
    };

    const runTransition = (e: React.MouseEvent) => {
        const target = e.target as HTMLDivElement;
        e.persist();
        target.classList.add(styles.hide);
        target.addEventListener('transitionend', () => target.classList.remove(styles.hide), {
            once: true,
        });
    };

    return (
        <>
            <div data-animation={AnimationTypeEnum.Shake} onClick={runAnimation} className={styles.animate}>
                Animate shake
            </div>

            <div data-animation={AnimationTypeEnum.Dance} onClick={runAnimation} className={styles.animate}>
                Animate dance
            </div>

            <div onClick={runTransition} className={styles.transition}>
                Transition
            </div>
        </>
    );
};

export default memo(AnimateAndTransition);
