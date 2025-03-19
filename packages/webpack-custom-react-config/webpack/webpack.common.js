const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const utils = require('./utils.js');
const packageJson = require('../package.json');
const prefix = packageJson.prefix;

const tsLoaders = () => [
    {
        loader: 'cache-loader',
        options: {
            cacheDirectory: path.resolve('build/cache-loader'),
        },
    },
    {
        loader: 'thread-loader',
        options: {
            // There should be 1 cpu for the fork-ts-checker-webpack-plugin.
            // The value may need to be adjusted (e.g. to 1) in some CI environments,
            // as cpus() may report more cores than what are available to the build.
            workers: require('os').cpus().length - 1,
        },
    },
    {
        loader: 'ts-loader',
        options: {
            transpileOnly: true,
            happyPackMode: true,
        },
    },
];

const lessLoaders = loaders => {
    const lessLoader = {
        loader: 'less-loader',
        options: {
            lessOptions: {
                javascriptEnabled: true,
            },
        },
    };

    return [
        {
            test: /\.less$/,
            exclude: /\.module\.less$/,
            use: [...loaders, 'css-loader', 'postcss-loader', lessLoader],
        },
        {
            test: /\.module\.less$/,
            use: [
                ...loaders,
                {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            localIdentName: '[name]__[local]___[hash:base64:5]',
                        },
                    },
                },
                'postcss-loader',
                lessLoader,
            ],
        },
    ];
};

const commonConfig = options => ({
    cache: options.env !== 'production',
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        modules: ['node_modules'],
        alias: utils.mapTypescriptAliasToWebpackAlias(),
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: tsLoaders(),
                include: [utils.root('./app')],
                exclude: [utils.root('node_modules')],
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack', 'file-loader'],
            },
            {
                test: /\.(jpe?g|png|gif|woff2?|ttf|eot)$/i,
                loader: 'file-loader',
                options: {
                    digest: 'hex',
                    hash: 'sha512',
                    name: 'content/[hash].[ext]',
                },
            },
            {
                enforce: 'pre',
                test: /\.jsx?$/,
                loader: 'source-map-loader',
            },
            {
                test: /\.(j|t)sx?$/,
                enforce: 'pre',
                loader: 'eslint-loader',
                exclude: [utils.root('node_modules')],
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    targets: ['defaults', 'ie >= 11'],
                                    useBuiltIns: 'entry',
                                    corejs: 3,
                                },
                            ],
                        ],
                        plugins: [options.env !== 'production' && require.resolve('react-refresh/babel')].filter(
                            Boolean
                        ),
                    },
                },
                exclude: /@babel(?:\/|\\{1,2})runtime|core-js/,
            },
        ],
    },
    stats: {
        children: false,
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
    plugins: [
        ...(process.argv.includes('--dayjs') ? [new AntdDayjsWebpackPlugin()] : []),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: `'${options.env}'`,
                BUILD_TIMESTAMP: `'${new Date().getTime()}'`,
                // APP_VERSION is passed as an environment variable from the Gradle / Maven build tasks.
                VERSION: `'${process.env.hasOwnProperty('APP_VERSION') ? process.env.APP_VERSION : 'DEV'}'`,
                DEBUG_INFO_ENABLED: options.env === 'development',
            },
        }),
        new ForkTsCheckerWebpackPlugin({
            eslint: {
                files: utils.root('**/*.{ts,tsx}'),
            },
        }),
        new HtmlWebpackPlugin({
            inject: true,
            template: utils.root('app/index.html'),
        }),
        // new HtmlWebpackPlugin({
        //     template: './src/main/resources/templates/common.ftl.template',
        //     filename: utils.root('src/main/resources/templates/common.ftl'),
        //     chunksSortMode: 'auto',
        //     inject: true,
        //     base: `/${prefix}/`,
        //     minify: false,
        // }),
        // Copies individual files or entire directories, which already exist, to the build directory.
        // new CopyWebpackPlugin({
        //     patterns: [
        //         {
        //             from: './node_modules/swagger-ui-dist/*.{js,css,html,png}',
        //             to: 'swagger-ui',
        //             flatten: true,
        //             globOptions: { ignore: ['index.html'] },
        //         },
        //         { from: './node_modules/axios/dist/axios.min.js', to: 'swagger-ui' },
        //     ],
        // }),
        // {
        //     apply: compiler => {
        //         compiler.hooks.afterEmit.tap('HtmlWebpackPlugin', () => {
        //             fs.copyFile(
        //                 utils.root('src/main/resources/templates/common.ftl'),
        //                 utils.root('target/classes/templates/common.ftl'),
        //                 err => err && process.stderr.write("Error copying 'common.ftl' template: " + err)
        //             );
        //         });
        //     },
        // },
    ],
});

module.exports = {
    lessLoaders,
    commonConfig,
};
