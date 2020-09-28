const path = require('path');

module.exports = {
    stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
    typescript: {
        check: false,
        checkOptions: {},
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
            shouldExtractLiteralValuesFromEnum: true,
            propFilter: prop => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
        },
    },
    addons: ['@storybook/addon-actions', '@storybook/addon-links', '@storybook/addon-docs', '@storybook/addon-a11y'],
    webpackFinal: async config => {
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            use: [
                {
                    loader: require.resolve('ts-loader'),
                },
            ],
        });

        config.module.rules.push({
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
            include: path.resolve(__dirname, '../'),
        });

        config.resolve.extensions.push('.ts', '.tsx');

        return config;
    },
};
