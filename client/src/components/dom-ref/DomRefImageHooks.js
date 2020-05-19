import React, { useEffect, useRef, memo } from "react";
import "./DomRefImage.scss";

export default memo(({ className, ...restProps }) => {
    const ref = useRef();
    const currentClassName = `dom-ref-image ${className || ""}`;

    useEffect(() => {
        const refCurrent = ref.current;

        if (refCurrent) {
            refCurrent.onload = () => {
                refCurrent.style.gridRowEnd = `span ${refCurrent.clientHeight}`;
            };
        }

        return () => {
            console.log("DomRefImageHooks cleared when component destroyed");
        };
    }, []);

    return (
        <img
            loading="lazy"
            ref={ref}
            className={currentClassName}
            {...restProps}
        />
    );
});
