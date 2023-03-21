import React, { FC, memo } from 'react';

type TemplateContent1Props = {
    age: number;
    value: boolean;
};

const TemplateContent1: FC<TemplateContent1Props> = ({ age, value }) => {
    return (
        <div>
            TemplateContent1 {age} {value}
        </div>
    );
};

export default memo(TemplateContent1);
