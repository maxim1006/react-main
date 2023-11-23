'use client';

import { LinkProps } from '@mui/material';
import { LinkProps as NextLinkProps } from 'next/link';
import NextLink from 'next-intl/link';
import { FC, forwardRef } from 'react';

type CombinedLinkProps = LinkProps<typeof NextLink>;

type AppLinkProps = Omit<CombinedLinkProps, 'href'> & {
    href: NextLinkProps['href'];
    locale?: string;
};

export const LinkBehavior: FC<AppLinkProps> = forwardRef<any, any>((props, ref) => {
    return <NextLink ref={ref} {...props} />;
});

LinkBehavior.displayName = 'LinkBehavior';
