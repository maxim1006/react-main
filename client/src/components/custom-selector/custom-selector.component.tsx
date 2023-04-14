import React, { memo, FC } from 'react';

type CustomTagProps = {};

const CustomTag: FC<CustomTagProps> = () => {
    const titleLevel = 1;

    const CustomHTag = `h${titleLevel}` as keyof JSX.IntrinsicElements;

    return <CustomHTag>CustomTag h1</CustomHTag>;
};

export default memo(CustomTag);
