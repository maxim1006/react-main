const HtmlWebPackPlugin = require('html-webpack-plugin');

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
            },
            {
                test: /\.worker\.(ts|tsx|js|jsx)$/i,
                use: [
                    {
                        loader: 'worker-loader'
                    },
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html'
        })
    ]
};
