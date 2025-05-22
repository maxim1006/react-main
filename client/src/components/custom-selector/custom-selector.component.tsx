import React, { memo, FC } from 'react';

type CustomSelectorProps = {};

const CustomSelector: FC<CustomSelectorProps> = () => {
    /*
     * можно только те селекторы которые указаны в
     *  interface IntrinsicElements {
     * */
    return <custom-selector>Custom Selector</custom-selector>;
};

export default memo(CustomSelector);
