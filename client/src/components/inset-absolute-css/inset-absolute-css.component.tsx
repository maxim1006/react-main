import { memo, FC } from 'react';
import styles from './css-tips.module.scss';

type InsetAbsoluteCssProps = {};

const InsetAbsoluteCss: FC<InsetAbsoluteCssProps> = () => {
    return <div className={styles.fullAbsoluteBlock} />;
};

export default memo(InsetAbsoluteCss);
