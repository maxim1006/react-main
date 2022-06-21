const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    output: {
        publicPath: 'http://localhost:8081/'
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', '.json']
    },

    devServer: {
        port: 8081
    },

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(ts|tsx|js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },

    plugins: [
        new ModuleFederationPlugin({
            name: 'chatGqlHost',
            library: { type: 'var', name: 'chatGqlHost' },
            filename: 'remoteEntry.js',
            remotes: { chatGql: 'chatGql' },
            exposes: {},
            shared: require('./package.json').dependencies
        }),
        new HtmlWebPackPlugin({
            template: './src/index.html'
        })
    ]
};
