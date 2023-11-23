import { localFontVar } from '@common/fonts/font';
import { LinkBehavior } from '@common/theme/link-behavior.component';
import { createTheme } from '@mui/material';

export const theme = createTheme({
    typography: {
        fontFamily: localFontVar.style.fontFamily,
        button: {
            textTransform: 'none',
        },
    },
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {},
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {},
            },
        },
        MuiLink: {
            defaultProps: {
                component: LinkBehavior,
            },
            styleOverrides: {
                root: {},
            },
        },
    },
});
