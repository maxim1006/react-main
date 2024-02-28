import React, { FC } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';

export interface IButtonProps {
    onClick: () => void;
    disabled?: boolean;
    className?: string;
    text?: string;
}

export const Button: FC<IButtonProps> = ({ onClick, disabled, className, text }) => (
    <button type="button" className={cx(styles.button, className)} onClick={onClick} disabled={disabled}>
        {text}
    </button>
);
