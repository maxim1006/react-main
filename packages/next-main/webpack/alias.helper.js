const path = require('path');

function addAlias(config) {
    config = {
        ...config,
        resolve: {
            ...(config?.resolve ?? {}),
            alias: {
                ...(config?.resolve?.alias ?? {}),
                '@public': path.resolve(__dirname, '../public'),
                '@styles': path.resolve(__dirname, '../src/common/styles')
            }
        }
    };

    return config;
}

module.exports = { addAlias };
