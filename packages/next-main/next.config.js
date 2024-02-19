const { addAlias } = require('./webpack/alias.helper');
const { initSvgr } = require('./webpack/svgr.helper');

const withNextIntl = require('next-intl/plugin')('./src/i18n.ts');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
module.exports = withBundleAnalyzer(
    withNextIntl({
        webpack(config) {
            initSvgr(config);

            config = addAlias(config);

            return config;
        },
        logging: {
            fullUrl: true,
            level: 'verbose',
        },
        experimental: {
            logging: {
                fullUrl: true,
                level: 'verbose',
            },
            optimizePackageImports: ['@mui/base', '@mui/lab', '@mui/types'],
        },
        reactStrictMode: true,
        env: {},
    })
);
