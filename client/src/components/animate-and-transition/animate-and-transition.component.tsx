import { FC, memo, MouseEvent } from 'react';
import styles from './animate-and-transition.module.scss';

type AnimateAndTransitionProps = {};

enum ActionTypeEnum {
    Shake = 'shake',
    Dance = 'dance',
    Hide = 'hide',
}

enum ActionEventEnum {
    Animationend = 'animationend',
    Transitionend = 'transitionend',
}

const AnimateAndTransition: FC<AnimateAndTransitionProps> = () => {
    const runAction = (type: ActionEventEnum) => (e: MouseEvent) => {
        const target = e.target as HTMLDivElement;
        const dataStyle = styles[target.dataset.action];
        e.persist();
        target.classList.add(dataStyle);
        target.addEventListener(type, _ => target.classList.remove(dataStyle), {
            once: true,
        });
    };

    return (
        <>
            <div
                data-action={ActionTypeEnum.Shake}
                onClick={runAction(ActionEventEnum.Animationend)}
                className={styles.animate}
            >
                Animate shake
            </div>

            <div
                data-action={ActionTypeEnum.Dance}
                onClick={runAction(ActionEventEnum.Animationend)}
                className={styles.animate}
            >
                Animate dance
            </div>

            <div
                data-action={ActionTypeEnum.Hide}
                onClick={runAction(ActionEventEnum.Transitionend)}
                className={styles.transition}
            >
                Transition
            </div>
        </>
    );
};

export default memo(AnimateAndTransition);
