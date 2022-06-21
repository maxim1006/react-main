const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    output: {
        publicPath: 'http://localhost:8080/'
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', '.json']
    },

    devServer: {
        port: 8080
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
        // remoteEntry.js - файл с добавкой от ModuleFederationPlugin
        new ModuleFederationPlugin({
            name: 'chatGql',
            library: { type: 'var', name: 'chatGql' },
            filename: 'remoteEntry.js',
            remotes: {},
            exposes: {
                './ChatGql': './src/components/chat/chat.component'
            },
            shared: require('./package.json').dependencies
        }),
        new HtmlWebPackPlugin({
            template: './src/index.html'
        })
    ]
};
