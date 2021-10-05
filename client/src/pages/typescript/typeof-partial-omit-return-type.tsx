import React from 'react';

// @ts-ignore
import { ButtonBase } from '@material-ui/core';

export const o = {
    foo: 1,
    bar: 2
};

export const o1: typeof o = {
    foo: 3,
    bar: 1
};

export const o2: Partial<typeof o> = {
    bar: 1
};

// Grabbing the Prop types of a component: Use React.ComponentProps and typeof,
// and optionally Omit any overlapping types
type ButtonProps = React.ComponentProps<typeof ButtonBase>; // no problem! grab your own!
type AlertButtonProps = Omit<ButtonProps, 'onClick'>; // modify
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const AlertButton: React.FC<AlertButtonProps> = props => <ButtonBase onClick={() => alert('hello')} {...props} />;

// You may also use ComponentPropsWithoutRef (instead of ComponentProps)
// and ComponentPropsWithRef (if your component specifically forwards refs)

// Grabbing the return type of a function: use ReturnType:
// Copy;
// inside some library - return type { baz: number } is inferred but not exported
function foo(bar: string) {
    return { baz: 1 };
}

//  inside your app, if you need { baz: number }
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type FooReturn = ReturnType<typeof foo>; // { baz: number }

console.log(window.customProp);
