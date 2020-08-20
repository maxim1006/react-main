import React, { memo } from "react";
import styles from "./css-module.module.scss";

const CssModuleComponent = () => {
    return (
        <>
            <div className={styles.cssModule}>Css module example</div>
            <div>Exported from css-module.module.scss: {styles.exportedValue}</div>
        </>
    );
};

export default memo(CssModuleComponent);
