import { AnchorHTMLAttributes, memo } from 'react';
import styled from 'styled-components';
import { MyLinkProps } from './link.model';

const MyLink = memo<MyLinkProps & AnchorHTMLAttributes<HTMLAnchorElement>>(styled.a<MyLinkProps>`
    position: relative;

    &::after {
        content: '';
        position: absolute;
        top: -7px;
        left: -3px;
        right: -3px;
        bottom: -7px;
    }

    &,
    &:hover,
    &:active {
        color: #0068ff;
    }

    &:hover {
        text-decoration: underline;
    }

    &:visited {
        color: ${props => (props.disableVisited ? '#0068ff' : '#9355B0')};
    }

    &:focus::after {
        border: 2px solid #acdafa;
        border-radius: 5px;
        transition: border-radius 0.2s linear, top 0.2s linear, bottom 0.2s linear, left 0.2s linear, right 0.2s linear;
    }
`);

MyLink.displayName = 'MyLink';

export { MyLink };
