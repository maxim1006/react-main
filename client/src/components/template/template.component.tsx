import React, { memo, NamedExoticComponent, ReactNode } from 'react';

export type Flatten<T> = T extends any[] ? T[number] : T;
export type MyTemplateType = string | number | boolean | string[] | number[] | boolean[];
export type MyTemplateModel<T, TM extends {} = {}> = {
    value?: T;
    templateModel?: TM;
    content?: ReactNode;
};

type MyTemplateProps<T extends MyTemplateType, TM extends {} = {}> = {
    template?: NamedExoticComponent<TM>;
    model: MyTemplateModel<Flatten<T>, TM>;
};

const MyTemplate = <T extends MyTemplateType, TM extends {} = {}>({
    template: Template,
    model,
}: MyTemplateProps<T, TM>) => {
    return (
        <div>
            MyTemplate
            {model.content ?? (Template && model.templateModel && <Template {...model.templateModel} />)}
        </div>
    );
};

export default memo(MyTemplate) as typeof MyTemplate;
