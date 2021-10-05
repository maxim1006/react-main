/* config-overrides.js */
const { addLess } = require('./webpack/webpack.utils');
const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const packageJson = require('./package.json');
const prefix = packageJson.prefix;
const { alias, configPaths } = require('react-app-rewire-alias');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    webpack: function(config, env) {
        let isProd = env === 'production';
        let plugins = config.plugins;
        let externalLess = process.argv.includes('--external-less');

        // build analyzer
        if (process.argv.includes('--report')) {
            plugins.push(new BundleAnalyzerPlugin());
        }

        // add aliases
        // config.resolve.alias = {
        //     ...config.resolve.alias,
        //     '@styles': path.resolve(__dirname, 'src/assets/styles'),
        //     '@app': path.resolve(__dirname, 'src'),
        // };
        alias({
            ...configPaths('tsconfig-paths.json'),
            ...config.resolve.alias,
            '@styles': path.resolve(__dirname, 'src/assets/styles')
        })(config);

        // dont build runtime chunk
        config.optimization.runtimeChunk = false;

        // add less
        addLess(config, isProd);

        // add https://github.com/ant-design/antd-dayjs-webpack-plugin
        // plugins.push(new AntdDayjsWebpackPlugin());

        // copy build artifacts
        if (isProd && !externalLess) {
            plugins.push(
                new FileManagerPlugin({
                    events: {
                        onEnd: {
                            copy: [{ source: 'from', destination: `$to` }]
                        }
                    }
                })
            );
        }

        // extract index.less in separate file via build:less task and get index.less as global.css in ./
        if (isProd && externalLess) {
            config.entry = {
                main: path.resolve(__dirname, 'src/index.less')
            };

            config.plugins = [
                new MiniCssExtractPlugin({
                    // Options similar to the same options in webpackOptions.output
                    // both options are optional
                    filename: '[name].css'
                }),
                new FileManagerPlugin({
                    events: {
                        onEnd: {
                            copy: [{ source: 'build/global.css', destination: `./` }]
                        }
                    }
                })
            ];

            config.optimization.splitChunks = {
                cacheGroups: {
                    default: false,
                    // Merge all the CSS into one file
                    main: {
                        name: 'global',
                        test: /\.(less)?(s?css$)?/,
                        chunks: 'all',
                        minChunks: 1,
                        reuseExistingChunk: true,
                        enforce: true
                    }
                }
            };
        }

        // Set ignoreOrder flag to true for MiniCssExtractPlugin
        // The problem described here https://stackoverflow.com/a/67579319.
        // In our case it was related with using svg icons
        for (let i = 0; i < config.plugins.length; i++) {
            const p = config.plugins[i];
            if (!!p.constructor && p.constructor.name === MiniCssExtractPlugin.name) {
                const miniCssExtractOptions = { ...p.options, ignoreOrder: true };
                config.plugins[i] = new MiniCssExtractPlugin(miniCssExtractOptions);
                break;
            }
        }
        ///////////////////////////////////////////////////////////

        return config;
    }
};
