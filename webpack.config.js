const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }]
    },
    devtool: 'inline-source-map',
    plugins: [
        new webpack.ProgressPlugin(), // 进度
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Data Structures',
            filename: 'index.html',
            template: 'public/index.html',
            favicon: 'public/favicon.ico'
        })
    ]
}