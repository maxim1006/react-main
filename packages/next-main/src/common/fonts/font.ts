import localFont from 'next/font/local';

//https://github.com/rsms/inter/blob/master/docs/font-files
export const localFontVar = localFont({
    src: [
        {
            path: './../../../public/fonts/Inter-Medium.woff2',
            weight: '400',
        },
    ],
    display: 'swap',
    preload: true,
    variable: '--font-base-font-family',
});
