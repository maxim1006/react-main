'use client';

import { theme } from '@common/theme/theme';
import { ThemeProvider } from '@mui/material';
import { ReactNode } from 'react';

type ThemeClientProvidersProps = {
    children: ReactNode;
};

export function ThemeClientProviders({ children }: ThemeClientProvidersProps) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
