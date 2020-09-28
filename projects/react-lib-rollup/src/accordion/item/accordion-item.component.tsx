import React from 'react';
import { UxAccordionItemComponentType } from './accordion-item.model';
import { StyledCollapsePanel } from './accordion-item.styled';

const UxAccordionItem: UxAccordionItemComponentType = props => <StyledCollapsePanel {...props} />;

UxAccordionItem.displayName = 'UxAccordionItem';

// TODO memo
export default UxAccordionItem;
