import { CollapseProps } from 'antd/lib/collapse';
import { FC } from 'react';
import { UxAccordionItemComponentType } from './item/accordion-item.model';

export type UxAccordionProps = CollapseProps;
export type UxAccordionComponentType = FC<UxAccordionProps> & {
    Item: UxAccordionItemComponentType;
};
