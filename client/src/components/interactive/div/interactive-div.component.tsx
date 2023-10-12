import React, { memo, FC, useCallback } from 'react';
import cn from 'classnames';
import styles from './interactive-div.module.scss';

/**
 * InteractiveDivProps redefines onClick event handler
 * if you need to distinguish between mouse handler and keyboard handler use
 * `isKeyboardEvent` and `isMouseEvent` type guards.
 * */
type InteractiveDivProps = {
    disabled?: boolean;
    onClick?: React.EventHandler<React.SyntheticEvent>;
} & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'onClick'>;

/**
 * Component that handles div with onClick handler
 * simple <div onClick={...}> does not satisfy wcag spec because div is a static element and cannot have mouse event handlers
 * to make div interactive it must have role, tabIndex and keyboard handler
 * so instead of <div onClick={...}> use <InteractiveDiv onClick={...}>
 *
 * If in doubt refer to docs
 * eslint plugin: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/no-static-element-interactions.md
 * wcag reference: https://bass.netcracker.com/display/UX/WCAG+2.1
 * */
const InteractiveDiv: FC<InteractiveDivProps> = props => {
    const { onClick, onKeyDown, role, tabIndex, className, children, disabled, ...restProps } = props;

    const onClickInternal = useCallback(
        (event: React.MouseEvent) => !disabled && onClick?.(event),
        [disabled, onClick]
    );

    const onKeyDownInternal = useCallback(
        (event: React.KeyboardEvent<HTMLDivElement>) => {
            if (disabled) return;

            if (onKeyDown) {
                onKeyDown(event);
            } else if (event.key === 'Enter' && onClick) {
                onClick(event);
            }
        },
        [disabled, onKeyDown, onClick]
    );

    return (
        <div
            role={role ?? 'button'}
            aria-disabled={disabled}
            tabIndex={tabIndex ?? 0}
            className={cn(className, 'taInteractiveDiv', styles.div)}
            onClick={onClickInternal}
            onKeyDown={onKeyDownInternal}
            {...restProps}
        >
            {children}
        </div>
    );
};

export default memo(InteractiveDiv);
