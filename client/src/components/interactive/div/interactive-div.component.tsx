import { DetailedHTMLProps, EventHandler, HTMLAttributes, memo, SyntheticEvent, KeyboardEvent } from 'react';
import cn from 'classnames';
import styles from './interactive-div.module.less';

/**
 * InteractiveDivProps redefines onClick event handler
 * if you need to distinguish between mouse handler and keyboard handler use
 * `isKeyboardEvent` and `isMouseEvent` type guards.
 * */
type InteractiveDivProps = {
    onClick: EventHandler<SyntheticEvent>;
} & Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'onClick'>;

/**
 * Component that handles div with onClick handler
 * simple <div onClick={...}> does not satisfy wcag spec because div is a static element and cannot have mouse event handlers
 * to make div interactive it must have role, tabIndex and keyboard handler
 * so instead of <div onClick={...}> use <InteractiveDiv onClick={...}>
 *     ex:
 *   <InteractiveDiv
         onClick={event => {
            if (isKeyboardEvent(event)) {
              console.log(event.key);
            } else if (isMouseEvent(event)) {
              console.log(event.pageY, event.pageX);
            }
          }}
     ></InteractiveDiv>
 *
 * If in doubt refer to docs
 * eslint plugin: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/no-static-element-interactions.md
 * */
const InteractiveDiv = memo<InteractiveDivProps>(function InteractiveDiv(props) {
    const { onClick, onKeyDown, role, tabIndex, className, children, ...restProps } = props;

    const handleClick = onClick ?? (() => {});
    const handleKeyDown =
        onKeyDown ??
        ((event: KeyboardEvent) => {
            if (event.key === 'Enter') {
                handleClick(event);
            }
        });

    return (
        <div
            role={role ?? 'button'}
            tabIndex={tabIndex ?? 0}
            className={cn(className, styles.div)}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            {...restProps}
        >
            {children}
        </div>
    );
});

export default InteractiveDiv;
