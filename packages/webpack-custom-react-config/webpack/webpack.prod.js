const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const utils = require('./utils.js');
const { commonConfig, lessLoaders } = require('./webpack.common.js');

const ENV = 'production';

module.exports = webpackMerge(commonConfig({ env: ENV }), {
    // devtool: 'source-map', // Enable source maps. Please note that this will slow down the build
    mode: ENV,
    entry: {
        main: './app/index',
    },
    output: {
        path: utils.root('build/'),
        filename: '[name].[hash].bundle.js',
        chunkFilename: '[name].[hash].chunk.js',
        publicPath: './',
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.(le|c)ss$/,
                loader: 'stripcomment-loader',
            },
            ...lessLoaders([
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '../',
                    },
                },
            ]),
        ],
    },
    optimization: {
        runtimeChunk: false,
        minimizer: [
            new TerserPlugin({
                cache: true,
                parallel: true,
                // sourceMap: true, // Enable source maps. Please note that this will slow down the build
                terserOptions: {
                    ecma: 5,
                    toplevel: true,
                    module: true,
                    beautify: false,
                    comments: false,
                    compress: {
                        warnings: false,
                        ecma: 5,
                        module: true,
                        toplevel: true,
                    },
                    output: {
                        comments: false,
                        beautify: false,
                        indent_level: 2,
                        ecma: 5,
                    },
                    mangle: {
                        keep_fnames: true,
                        module: true,
                        toplevel: true,
                    },
                },
            }),
            new OptimizeCSSAssetsPlugin({}),
        ],
    },
    plugins: [
        ...(process.argv.includes('--report') ? [new BundleAnalyzerPlugin()] : []),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            filename: '[name].[hash].css',
            chunkFilename: '[name].[hash].css',
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false,
        }),
    ],
});
