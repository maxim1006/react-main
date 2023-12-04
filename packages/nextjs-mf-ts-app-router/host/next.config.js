const NextFederationPlugin = require('@module-federation/nextjs-mf');

const remotes = isServer => {
    const location = isServer ? 'ssr' : 'chunks';
    return {
        widget: `widget@http://localhost:3301/_next/static/${location}/remoteEntryWidget.js`,
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
            })
        );
        return config;
    },
};

module.exports = nextConfig;
