import React, { FC, memo } from 'react';

type TemplateContentProps = {
    prop: string;
    prop1: string;
};

const TemplateContent: FC<TemplateContentProps> = ({ prop1, prop }) => {
    return (
        <div>
            TemplateContent {prop} {prop1}
        </div>
    );
};

export default memo(TemplateContent);
