import React from 'react';
import { ThemeProvider } from 'styled-components';
import 'antd/dist/antd.min.css';
import { theme } from '../themes/base/basic';
import GlobalStyles from '../themes/base/global';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
    Story => (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Story />
        </ThemeProvider>
    ),
];
