import React, { FC, memo } from 'react';
import MyTemplate from '@app/components/template/template.component';
import TemplateContent from '@app/components/template/template-content.component';
import TemplateContent1 from '@app/components/template/template-content1.component';

type MyTemplateContainerProps = {};

const MyTemplateContainer: FC<MyTemplateContainerProps> = () => {
    return (
        <>
            <MyTemplate
                template={TemplateContent}
                model={{ value: 1, templateModel: { prop: 'prop', prop1: 'prop1' } }}
            />
            <MyTemplate
                template={TemplateContent1}
                model={{ value: 'TemplateContent1', templateModel: { age: 35, value: true } }}
            />
            <MyTemplate
                template={TemplateContent1}
                model={{ value: 'TemplateContent1', templateModel: { age: 35, value: true } }}
            />
            <MyTemplate model={{ content: 'content' }} />
        </>
    );
};

export default memo(MyTemplateContainer);
