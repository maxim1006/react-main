const { dependencies } = require('./package.json');

const { ModuleFederationPlugin } = require('webpack').container;

module.exports = function override(config, env) {
    console.log('Custom Webpack Config');

    config.output.publicPath = 'auto';
    config.plugins.push(
        new ModuleFederationPlugin({
            name: 'craWidget',
            filename: 'remoteEntryWidget.js',
            library: { type: 'var', name: 'craWidget' },
            exposes: {
                './CraTitleClient':
                    './src/components/client/exposed-title/exposed-title.component.tsx',
                './CraTitleServer':
                    './src/components/server/exposed-title/exposed-title.component.tsx',
            },
            shared: {
                ...dependencies,
                react: {
                    singleton: true,
                    requiredVersion: dependencies['react'],
                },
                'react-dom': {
                    singleton: true,
                    requiredVersion: dependencies['react-dom'],
                },
            },
        })
    );

    return config;
};
