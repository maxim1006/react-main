import React, { memo, FC } from "react";
import cn from 'classnames';
import styles from './component.module.scss';

type ComponentProps = {
    title: string;
    children: React.ReactNode;
}

const Component: FC<ComponentProps> = ({ title, children }) => {
    return <div className={cn(styles.host, 'taComponent')}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.body}>{children}</div>
    </div>;
};

export default memo(Component);
