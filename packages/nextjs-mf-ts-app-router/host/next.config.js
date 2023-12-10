const NextFederationPlugin = require('@module-federation/nextjs-mf');
const { dependencies } = require('./package.json');

const remotes = isServer => {
    const location = isServer ? 'ssr' : 'chunks';
    return {
        widget: `widget@http://localhost:3301/_next/static/${location}/remoteEntryWidget.js`,
        craWidget: `craWidget@http://localhost:3302/remoteEntryWidget.js`,
    };
};

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config, options) {
        config.plugins.push(
            new NextFederationPlugin({
                name: 'host',
                remotes: remotes(options.isServer),
                filename: 'static/chunks/remoteEntry.js',
                shared: {},
            })
        );
        return config;
    },
};

module.exports = nextConfig;
