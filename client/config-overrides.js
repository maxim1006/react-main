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
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const UnusedWebpackPlugin = require('unused-webpack-plugin');

module.exports = {
    webpack: function (config, env) {
        //disable create-react-app imports restriction: "outside of src directory"
        config.resolve.plugins = config.resolve.plugins.filter(plugin => !(plugin instanceof ModuleScopePlugin));

        let isProd = env === 'production';
        let plugins = config.plugins;
        let externalLess = process.argv.includes('--external-less');
        let unusedPluginEnabled = process.argv.includes('--unused-plugin');

        // build analyzer
        if (process.argv.includes('--report')) {
            plugins.push(new BundleAnalyzerPlugin());
        }

        !isProd &&
            unusedPluginEnabled &&
            config.plugins.push(
                new UnusedWebpackPlugin({
                    directories: [path.join(__dirname, './src')],
                    exclude: ['*.test.js'],
                    root: __dirname,
                }),
            );

        // add aliases
        // config.resolve.alias = {
        //     ...config.resolve.alias,
        //     '@styles': path.resolve(__dirname, 'src/assets/styles'),
        //     '@app': path.resolve(__dirname, 'src'),
        // };
        alias({
            ...configPaths('tsconfig-paths.json'),
            ...config.resolve.alias,
            '@styles': path.resolve(__dirname, 'src/assets/styles'),
        })(config);

        // dont build runtime chunk
        config.optimization.runtimeChunk = false;

        // add less
        addLess(config, isProd);

        /** @see https://github.com/ant-design/antd-dayjs-webpack-plugin */
        // plugins.push(new AntdDayjsWebpackPlugin());

        // copy build artifacts
        if (isProd && !externalLess) {
            plugins.push(
                new FileManagerPlugin({
                    events: {
                        onEnd: {
                            copy: [{ source: 'from', destination: `$to` }],
                        },
                    },
                }),
            );
        }

        // extract index.less in separate file via build:less task and get index.less as global.css in ./
        if (isProd && externalLess) {
            config.entry = {
                main: path.resolve(__dirname, 'src/index.less'),
            };

            config.plugins = [
                new MiniCssExtractPlugin({
                    // Options similar to the same options in webpackOptions.output
                    // both options are optional
                    filename: '[name].css',
                }),
                new FileManagerPlugin({
                    events: {
                        onEnd: {
                            copy: [{ source: 'build/global.css', destination: `./` }],
                        },
                    },
                }),
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
                        enforce: true,
                    },
                },
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

        // Надо включить чтобы нормально проксировать через nginx сделал чтобы было билд удобнее из express сервера сервить
        // без этого добавит ко всему /react-main
        // /manifest.json вместо /react-main/manifest.json
        // config.output = {
        //     ...config.output,
        //     publicPath: '/',
        // };

        // пример как убрать CaseSensitivePathsPlugin
        // config.plugins = config.plugins.filter(p=>["CaseSensitivePathsPlugin"].includes(p.constructor.name))

        return config;
    },
    paths: function (paths, env) {
        // ...add your paths config
        return paths;
    },
};
