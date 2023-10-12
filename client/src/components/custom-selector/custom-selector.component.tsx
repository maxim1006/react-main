import React, { memo, FC, createElement } from 'react';
import InteractiveDiv from '@app/components/interactive/div/interactive-div.component';
import styles from './custom-selector.module.scss';
import cn from 'classnames';

type CustomTagProps = {
    href?: string;
    className?: string;
    children?: React.ReactNode;
};

const CustomTag: FC<CustomTagProps> = ({ href, className, children }) => {
    const titleLevel = 1;

    const CustomHTag = `h${titleLevel}` as keyof JSX.IntrinsicElements;

    const fullClassName = cn(styles.host, className, 'taCustomHTag2');

    const CustomHTag2 = createElement(
        href ? 'a' : InteractiveDiv,
        { className: fullClassName, ...(href ? { href } : {}) },
        children
    );

    return (
        <>
            <CustomHTag>CustomTag h1</CustomHTag>
            {CustomHTag2}
        </>
    );
};

export default memo(CustomTag);
