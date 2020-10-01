import { AnchorHTMLAttributes, FC } from 'react';

export type MyLinkProps = {
    disableVisited?: boolean;
};

export type MyLinkComponentType = FC<MyLinkProps & AnchorHTMLAttributes<HTMLAnchorElement>>;
