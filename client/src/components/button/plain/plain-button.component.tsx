import { ButtonHTMLAttributes, memo } from 'react';

type PlainButtonProps = {} & ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * This component exists to redefine default button type from 'submit' to 'button'
 * Use it everywhere instead of <button>
 * */
const PlainButton = memo<PlainButtonProps>(function PlainButton({ type, ...restProps }) {
    return <button type={type ?? 'button'} {...restProps} />;
});

export default PlainButton;
