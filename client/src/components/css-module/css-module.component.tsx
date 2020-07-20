import React, { memo } from "react";
import styles from "./css-module.module.scss";

const CssModuleComponent = () => {
    return <div className={styles.cssModule}>Css module example</div>;
};

export default memo(CssModuleComponent);
