import { memo } from 'react';
import styles from './examples-css-module.module.less';

const ExamplesCssModuleComponent = () => {
    return <div className={styles.examplesCssModule}>Css module content</div>;
};

export default memo(ExamplesCssModuleComponent);
