import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';
import logo from '../public/logo.svg';

const theme = create({
    base: 'dark',
    fontBase: 'NotoSans, sans-serif',
    fontCode: 'monospace',
    brandImage: logo,
    /*
    colorPrimary: 'hotpink',
    colorSecondary: 'deepskyblue',

    // UI
    appBg: 'white',
    appContentBg: 'silver',
    appBorderColor: 'grey',
    appBorderRadius: 4,

    // Typography
    fontBase: '"Open Sans", sans-serif',

    // Text colors
    textColor: 'black',
    textInverseColor: 'rgba(255,255,255,0.9)',

    // Toolbar default and active colors
    barTextColor: 'silver',
    barSelectedColor: 'black',
    barBg: 'hotpink',

    // Form colors
    inputBg: 'white',
    inputBorder: 'silver',
    inputTextColor: 'black',
    inputBorderRadius: 4,

    brandTitle: 'My custom storybook',
    brandUrl: 'https://example.com',
    brandImage: 'https://placehold.it/350x150',*/
});

addons.setConfig({
    isFullscreen: false,
    showNav: true,
    showPanel: true,
    panelPosition: 'bottom',
    sidebarAnimations: true,
    enableShortcuts: true,
    isToolshown: true,
    theme: theme,
    selectedPanel: undefined,
    initialActive: 'sidebar',
    showRoots: false,
});
