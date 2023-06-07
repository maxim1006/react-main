import React, { memo, FC } from 'react';
import cn from 'classnames';

type ImmutableArrayMethodsProps = {};

const ImmutableArrayMethods: FC<ImmutableArrayMethodsProps> = () => {
    const arr = ['Max', 'Aliya', 'Lili', 'Alice'];

    // old
    const oldArr = arr.slice();
    oldArr[0] = 'Maxim';
    console.log({ arr, oldArr });

    // new
    const newArr = arr.with(0, 'Maxim');
    const sortedArr = arr.toSorted();
    const reversedArr = arr.toReversed();
    const splicedArr = arr.toSpliced(0, 2, 'New');
    console.log({ arr, newArr, sortedArr, reversedArr, splicedArr });

    return <div className={cn('taImmutableArrayMethods')}>ImmutableArrayMethods</div>;
};

export default memo(ImmutableArrayMethods);
