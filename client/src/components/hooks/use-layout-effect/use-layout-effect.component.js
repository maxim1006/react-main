import React, { memo, useLayoutEffect, useRef } from "react";
import styles from "./use-layout-effect.module.scss";

const UseLayoutEffectComponent = () => {
    const ref = useRef();
    // анимация не сработает, если же оберну в useEffect то сработает
    useLayoutEffect(() => {
        console.log(ref);
        ref.current.style.transform = "translateX(100px)";
    }, []);

    return (
        <div className={styles.useLayoutEffect} ref={ref}>
            UseLayoutEffectComponent
        </div>
    );
};

export default memo(UseLayoutEffectComponent);
