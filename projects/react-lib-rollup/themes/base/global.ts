import { createGlobalStyle } from 'styled-components';
import NotoSansExtraLight from './fonts/NotoSans-ExtraLight.woff';
import NotoSansLight from './fonts/NotoSans-Light.woff';
import NotoSansRegular from './fonts/NotoSans-Regular.woff';
import NotoSansMedium from './fonts/NotoSans-Medium.woff';
import NotoSansSemiBold from './fonts/NotoSans-SemiBold.woff';
import NotoSansBold from './fonts/NotoSans-Bold.woff';
import NotoSansBlack from './fonts/NotoSans-Black.woff';

export default createGlobalStyle`
    @font-face {
        font-family: "NotoSans";
        src: url(${NotoSansExtraLight}) format('woff');
        font-weight: 200;
        font-display: swap;
    }
    @font-face {
        font-family: "NotoSans";
        src: url(${NotoSansLight}) format('woff');
        font-weight: 300;
        font-display: swap;
    }
    @font-face {
        font-family: "NotoSans";
        src: url(${NotoSansRegular}) format('woff');
        font-weight: 400;
        font-display: swap;
    }
    @font-face {
        font-family: "NotoSans";
        src: url(${NotoSansMedium}) format('woff');
        font-weight: 500;
        font-display: swap;
    }
    @font-face {
        font-family: "NotoSans";
        src: url(${NotoSansSemiBold}) format('woff');
        font-weight: 600;
        font-display: swap;
    }
    @font-face {
        font-family: "NotoSans";
        src: url(${NotoSansBold}) format('woff');
        font-weight: 700;
        font-display: swap;
    }
    @font-face {
        font-family: "NotoSans";
        src: url(${NotoSansBlack}) format('woff');
        font-weight: 900;
        font-display: swap;
    }

    body {
        font-family: "NotoSans", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;
