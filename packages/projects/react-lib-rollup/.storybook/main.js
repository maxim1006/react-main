const CircularDependencyPlugin = require('circular-dependency-plugin');

module.exports = {
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/react', '@storybook/addon-a11y'],
    typescript: {
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
            compilerOptions: {
                allowSyntheticDefaultImports: false,
                esModuleInterop: false,
            },
        },
    },
    webpackFinal: async (config) => {
        config.plugins.push(
            new CircularDependencyPlugin({
                exclude: /a\.js|node_modules/,
            })
        );

        // Found the solution for SVG here https://github.com/nrwl/nx/issues/2859
        // and partially copied it
        const svgRuleIndex = config.module.rules.findIndex((rule) => {
            const { test } = rule;
            return test.toString().startsWith('/\\.(svg|ico');
        });

        config.module.rules[
            svgRuleIndex
        ].test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/;

        config.module.rules.push(
            // use svgr for svg files
            {
                test: /\.svg$/,
                use: ['@svgr/webpack', 'url-loader'],
            },
            // use less-loader for less files
            { test: /\.less$/, loaders: ['style-loader', 'css-loader', 'less-loader'] }
        );

        return config;
    },
};
