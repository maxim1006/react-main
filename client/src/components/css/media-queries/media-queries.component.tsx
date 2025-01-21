import React, { memo, FC } from 'react';
import styles from './media-query-css.module.scss';
import cn from 'classnames';

type MediaQueryCssProps = {};

const MediaQueryCss: FC<MediaQueryCssProps> = () => {
    return <div className={cn(styles.host, 'taMediaQueryCss')}>MediaQueryCss</div>;
};

export default memo(MediaQueryCss);
