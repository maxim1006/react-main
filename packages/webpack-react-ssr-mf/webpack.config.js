const fs = require('node:fs');
const path = require('node:path');

const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const template = require('lodash/template');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const pkg = require('./package.json');
const { UniversalFederationPlugin } = require('@module-federation/node');
const MfExposes = require('./mf-exposes');

const rootDir = process.cwd();

const distDir = path.resolve(rootDir, 'dist');

const sourceCodeDir = path.resolve(__dirname, 'src');

function getModules(isProd, isServer) {
    return {
        rules: [
            {
                test: /\.(js|mjs|jsx|ts|tsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.sass$/,
                oneOf: [
                    {
                        test: /\.module\.sass$/,
                        use: [
                            !isServer && MiniCssExtractPlugin.loader,
                            !isServer && 'css-modules-typescript-loader',
                            {
                                loader: 'css-loader',
                                options: {
                                    modules: {
                                        localIdentName: '[name]__[local]___[hash:base64:5]',
                                        ...(!isServer
                                            ? {}
                                            : {
                                                  exportOnlyLocals: true,
                                              }),
                                    },
                                    sourceMap: !isProd,
                                },
                            },
                            {
                                loader: 'postcss-loader',
                                options: {
                                    postcssOptions: {
                                        plugins: [require('autoprefixer')],
                                    },
                                },
                            },

                            {
                                loader: 'sass-loader',
                                options: {
                                    sassOptions: {
                                        silenceDeprecations: ['legacy-js-api'],
                                    },
                                },
                            },
                        ].filter(Boolean),
                    },
                    {
                        use: [
                            !isServer && MiniCssExtractPlugin.loader,
                            'css-loader',
                            {
                                loader: 'postcss-loader',
                                options: {
                                    postcssOptions: {
                                        plugins: [require('autoprefixer')],
                                    },
                                },
                            },
                            'sass-loader',
                        ],
                    },
                ],
                exclude: /node_modules/,
            },
        ],
    };
}

module.exports = (_, argv) => {
    const isProd = argv.mode === 'production';

    const getConfig = isServer => ({
        name: isServer ? 'node' : 'web',
        context: sourceCodeDir,
        entry: './empty.tsx',
        target: isServer ? false : 'web',
        ...(isServer
            ? {
                  externalsPresets: { node: true },
              }
            : {}),
        output: {
            filename: 'js/[name].js',
            chunkFilename: 'js/[id].js',
            path: path.join(distDir, isServer ? 'node' : 'web'),
            uniqueName: 'max-test',
        },
        mode: isProd ? 'production' : 'development',

        optimization: {
            minimize: isProd,
            minimizer: [
                new TerserPlugin({
                    terserOptions: {
                        ecma: 5,
                        compress: {},
                        format: {
                            comments: /^!#/,
                        },
                    },
                    extractComments: false,
                }),
                new CssMinimizerPlugin({
                    minimizerOptions: {
                        preset: [
                            'default',
                            {
                                discardComments: { removeAll: true },
                            },
                        ],
                    },
                }),
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
            plugins: [new TsconfigPathsPlugin()],
        },
        devtool: isProd ? undefined : 'source-map',
        stats: 'errors-warnings',
        module: getModules(isProd, isServer),
        plugins: [
            !isServer &&
                new MiniCssExtractPlugin({
                    filename: 'css/[name].css',
                    chunkFilename: 'css/[id].css',
                }),
            !isServer && process.env.REPORT_ENV && new BundleAnalyzerPlugin(),
            new UniversalFederationPlugin({
                name: 'max_mf_test', // это будет имя модуля под которым он будет доступен для других приложений
                // name должен быть такой же как name и mf будет доступен по window.max_mf_test
                // Если ты пропустишь library, Webpack сам подставит { type: 'var', name: <name> } по умолчанию.
                ...(isServer ? { library: { type: 'commonjs-module' } } : {}),
                isServer, // or false
                remotes: {},
                filename: 'remoteEntry.js',
                exposes: MfExposes,
                shared: {
                    react: {
                        import: false,
                        singleton: true,
                        requiredVersion: pkg.dependencies.react,
                    },
                    'react-dom': {
                        import: false,
                        singleton: true,
                        requiredVersion: pkg.dependencies['react-dom'],
                    },
                    '@module-federation': {
                        import: false,
                        singleton: true,
                        requiredVersion: pkg.dependencies['@module-federation/node'],
                    },
                    '@max-test-mf/federated-host': {
                        import: false,
                        singleton: true,
                        requiredVersion: require('@types/max-test-mf__federated-host/package.json')
                            .version,
                    },
                },
            }),
            // проставит содержимое banner.txt в remoteEntry и main.js
            new webpack.BannerPlugin({
                banner: template(fs.readFileSync(path.resolve(__dirname, 'banner.txt'), 'utf-8'))({
                    version: process.env.VERSION ?? 'local',
                }), // the banner as string or function, it will be wrapped in a comment
                raw: true, // if true, banner will not be wrapped in a comment
                entryOnly: true,
            }),
        ].filter(Boolean),
        ...(isServer
            ? {
                  devServer: {
                      static: {
                          publicPath: '/test-public-path',
                          directory: distDir,
                      },
                      devMiddleware: {
                          writeToDisk: true,
                      },
                      compress: true,
                      port: 8007,
                      historyApiFallback: true,
                  },
              }
            : {}),
    });

    return [true, false].map(getConfig);
};
