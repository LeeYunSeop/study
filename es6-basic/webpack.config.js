const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

//const isDevMode = process.env.NODE_ENV.includes('dev');
const isDevMode = true;

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    devServer: {
        port: 9000,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                ],
            },
            {
                test: /\,js$/,
                exclude: '/node_modules/',
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env', {
                                    targets: {
                                        browsers: ['> 5% in KR','last 2 chrome versions']
                                    }
                                },
                            ]
                        ]
                    },
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: 'index.html' }),
        new MiniCssExtractPlugin()
    ],
    devtool: 'source-map'
}