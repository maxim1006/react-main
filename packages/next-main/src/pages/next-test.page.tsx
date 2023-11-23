import React, { memo, FC } from 'react';
import styles from './next-test-page.module.scss';
import cn from 'classnames';

type NextTestPageProps = {};

const NextTestPage: FC<NextTestPageProps> = () => {
    return <div className={cn(styles.host, 'taNextTestPage')}>NextTestPage</div>;
};

export default memo(NextTestPage);
