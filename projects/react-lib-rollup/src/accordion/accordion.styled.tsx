import { Collapse } from 'antd';
import { CollapseProps } from 'antd/lib/collapse';
import React, { FC } from 'react';
import styled from 'styled-components';

const ChevronSmallDownIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.418 7.85902C13.689 7.59102 14.127 7.59102 14.396 7.85902C14.666 8.12702 14.668 8.56002 14.396 8.82802L10.488 12.658C10.218 12.926 9.781 12.926 9.509 12.658L5.601 8.82802C5.331 8.56102 5.331 8.12702 5.601 7.85902C5.872 7.59102 6.31 7.59102 6.579 7.85902L10 11L13.418 7.85902Z" />
    </svg>
);

const StyledCollapse: FC<CollapseProps> = styled(Collapse)`
    border: none;

    & > .ant-collapse-item .ant-collapse {
        padding-left: 8px;
    }
`;

const UxAccordionArrowIcon = styled(ChevronSmallDownIcon)`
    .ant-collapse > .ant-collapse-item > .ant-collapse-header &.ant-collapse-arrow {
        fill: #626d82;
    }

    .ant-collapse > .ant-collapse-item:not(.ant-collapse-item-active) > .ant-collapse-header &.ant-collapse-arrow {
        transform: translateY(-50%) rotate(-90deg);
    }
`;
UxAccordionArrowIcon.displayName = 'UxAccordionArrowIcon';

export { UxAccordionArrowIcon, StyledCollapse };
