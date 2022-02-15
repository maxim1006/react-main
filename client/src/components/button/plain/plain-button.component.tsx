import { ButtonHTMLAttributes, DetailedHTMLProps, memo } from 'react';

type PlainButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

/**
 * This component exists to redefine default button type from 'submit' to 'button'
 * Use it everywhere instead of <button>
 * */
const PlainButton = memo<PlainButtonProps>(function PlainButton(props) {
    const { type, ...restProps } = props;

    return <button type={type ?? 'button'} {...restProps} />;
});

export default PlainButton;
