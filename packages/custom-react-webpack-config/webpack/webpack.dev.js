const webpack = require('webpack');
const writeFilePlugin = require('write-file-webpack-plugin');
const webpackMerge = require('webpack-merge');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const utils = require('./utils.js');
const { commonConfig, lessLoaders } = require('./webpack.common.js');

const ENV = 'development';

module.exports = options =>
    webpackMerge(commonConfig({ env: ENV }), {
        devtool: 'cheap-module-source-map', // https://reactjs.org/docs/cross-origin-errors.html
        mode: ENV,
        entry: ['./app/index'],
        output: {
            path: utils.root('build/'),
            filename: '[name].bundle.js',
            chunkFilename: '[id].chunk.js',
            // если вдруг надо записывать файлы в режиме разработки то надо раскомментить это + writeFilePlugin
            // publicPath: './',
        },
        module: {
            rules: lessLoaders(['style-loader']),
        },
        devServer: {
            port: 3000,
            stats: options.stats,
            hot: true,
            contentBase: utils.root('build/'),
            proxy: {
                // '/app/*': {
                //     target: 'http://localhost:3000',
                //     secure: false,
                // },
                // '/content/*': {
                //     target: 'http://localhost:3000',
                //     secure: false,
                // },
                // "*": {
                //   target: `http${options.tls ? "s" : ""}://localhost:8080`,
                //   changeOrigin: options.tls,
                //   headers: {
                //     "X-Forwarded-Host": "localhost:3000",
                //     "X-Forwarded-Proto": "http"
                //   },
                //   secure: false,
                //   logLevel: "debug"
                // }
            },
            watchOptions: {
                ignored: /node_modules/,
            },
            https: options.tls,
            historyApiFallback: true,
        },
        optimization: {
            namedModules: true,
        },
        stats: process.env.JHI_DISABLE_WEBPACK_LOGS ? 'none' : options.stats,
        plugins: [
            process.env.JHI_DISABLE_WEBPACK_LOGS
                ? null
                : new SimpleProgressWebpackPlugin({
                      format: options.stats === 'minimal' ? 'compact' : 'expanded',
                  }),
            new FriendlyErrorsWebpackPlugin(),
            //       new BrowserSyncPlugin(
            //           {
            //               https: options.tls,
            //               host: 'localhost',
            //               port: 3000,
            //               startPath: 'tls/',
            //               proxy: {
            //                   target: `http${options.tls ? 's' : ''}://localhost:9060`,
            //                   proxyOptions: {
            //                       changeOrigin: false, //pass the Host header to the backend unchanged  https://github.com/Browsersync/browser-sync/issues/430
            //                   },
            //               },
            //               socket: {
            //                   clients: {
            //                       heartbeatTimeout: 60000,
            //                   },
            //               },
            //               /*
            // ,ghostMode: { // uncomment this part to disable BrowserSync ghostMode; https://github.com/jhipster/generator-jhipster/issues/11116
            //   clicks: false,
            //   location: false,
            //   forms: false,
            //   scroll: false
            // } */
            //           },
            //           {
            //               reload: false,
            //           }
            //       ),
            new webpack.HotModuleReplacementPlugin(),
            // если вдруг надо записывать файлы в режиме разработки то надо раскомментить это + publicPath в output
            // new writeFilePlugin(),
            new webpack.WatchIgnorePlugin([utils.root('src/test')]),
            new ReactRefreshPlugin(),
        ].filter(Boolean),
    });
