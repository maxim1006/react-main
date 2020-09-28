import { Collapse } from 'antd';
import styled from 'styled-components';

export const StyledCollapsePanel = styled(Collapse.Panel)`
    .ant-collapse > &.ant-collapse-item {
        border-bottom: none;

        &.ant-collapse-item-active:not(:last-child) {
            padding-bottom: 8px;
        }

        & > .ant-collapse-header {
            padding: 2px 16px 2px 18px;
            font-size: 13px;
            font-weight: bold;
            color: #000000;

            & > .ant-collapse-arrow {
                left: -4px;
            }
        }

        & > .ant-collapse-content {
            font-size: 13px;
            color: #000000;

            & > .ant-collapse-content-box {
                padding: 0 0 0 18px;
                position: relative;

                &::before {
                    content: '';
                    position: absolute;
                    top: 3px;
                    left: 6px;
                    bottom: 0;
                    width: 1px;
                    background-color: #d5dce3;
                }
            }
        }
    }
`;
