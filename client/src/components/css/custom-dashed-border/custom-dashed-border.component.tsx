import React, { memo, FC } from 'react';
import styles from './custom-dashed-border.module.scss';
import cn from 'classnames';

type CustomDashedBorderProps = {};

const CustomDashedBorder: FC<CustomDashedBorderProps> = () => {
    return <div className={cn(styles.host, 'taCustomDashedBorder')}>CustomDashedBorder</div>;
};

export default memo(CustomDashedBorder);
