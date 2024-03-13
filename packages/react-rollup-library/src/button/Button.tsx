import React, { FC, memo } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';

export type ButtonProps = {
    onClick: () => void;
    disabled?: boolean;
    className?: string;
    text?: string;
}

const Button: FC<ButtonProps> = ({ onClick, disabled, className, text }) => {
    return <button type="button" className={cx(styles.button, className)} onClick={onClick} disabled={disabled}>
        {text}
    </button>
};

export default memo(Button);
