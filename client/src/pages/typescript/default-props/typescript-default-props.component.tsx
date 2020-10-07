import React, { FC, memo } from 'react';

type GreetProps = { age?: number };

const TypescriptDefaultProps: FC<GreetProps> = ({ age = 21 }) => <>Age: {age}</>;

// Если все же зачем-то нужно использовать то делаю так:
// type TypescriptDefaultPropsProps = { age: number } & typeof defaultProps;
//
// const defaultProps = {
//     age: 33,
// };
//
// const TypescriptDefaultProps: FC<TypescriptDefaultPropsProps> = ({ age }) => {
//     return <>Age: {age}</>;
// };
//
// TypescriptDefaultProps.defaultProps = defaultProps;
//
export default memo(TypescriptDefaultProps);
