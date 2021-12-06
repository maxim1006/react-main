import React, { FC } from 'react';
import './button.css';

export type ButtonProps = {
    /**
     * Some docs with default
     * @default false
     */
    primary?: boolean;
    backgroundColor?: string;
    size?: 'small' | 'medium' | 'large';
    label?: string;
    onClick?: () => void;
};

/**
 * Primary UI component for user interaction
 */
export const Button: FC<ButtonProps> = ({ primary, backgroundColor, size, label, ...props }) => {
    const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    return (
        <button
            type="button"
            className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
            style={backgroundColor ? { backgroundColor } : {}}
            {...props}
        >
            {label}
        </button>
    );
};
