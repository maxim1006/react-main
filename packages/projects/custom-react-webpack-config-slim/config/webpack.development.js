const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    devServer: {
        static: './',
        port: 3000,
        hot: true,
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            favicon: false,
            template: './public/index.html',
        })
    ]
}