import React from 'react';
import { UxAccordionComponentType, UxAccordionProps } from './accordion.model';
import { StyledCollapse, UxAccordionArrowIcon } from './accordion.styled';
import UxAccordionItem from './item/accordion-item.component';

const UxAccordion: UxAccordionComponentType = props => (
    <StyledCollapse ghost bordered={false} expandIcon={() => <UxAccordionArrowIcon />} {...props} />
);

UxAccordion.Item = UxAccordionItem;

UxAccordion.displayName = 'UxAccordion';

export default UxAccordion;
