import React, { memo, FC } from 'react';
import styles from './tg-button.module.scss';
import cn from 'classnames';

type TgButtonProps = React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>;

const TgButton: FC<TgButtonProps> = ({ children, ...rest }) => {
    return (
        <button type={rest.type || 'button'} className={cn(styles.host, 'taTgButton')} {...rest}>
            {children}
        </button>
    );
};

export default memo(TgButton);
