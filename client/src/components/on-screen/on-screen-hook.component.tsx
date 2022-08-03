import { memo, useRef } from 'react';
import styles from './on-screen-hook.module.scss';
import { useOnScreen } from '@app/hooks/on-screen.hook';

type OnScreenHookProps = {};

const OnScreenHook = memo<OnScreenHookProps>(function OnScreenHook() {
    const titleRef = useRef<HTMLDivElement>(null!);

    const visible = useOnScreen(titleRef);

    return (
        <div className={styles.wrapper}>
            <div ref={titleRef} className={styles.title}>
                Title
            </div>
            <div className={styles.sign}>Title is visible: {visible + ''}</div>
            <div className={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, consequuntur, delectus dolores eius,
                eum ex fuga illo impedit libero modi nostrum obcaecati officia porro quae quaerat quidem tenetur!
                Asperiores beatae cum ea hic repellendus sint suscipit! Dicta fugiat, neque nobis non numquam quam sint?
                Atque corporis doloremque incidunt magni quidem.
            </div>
        </div>
    );
});

export default OnScreenHook;
