const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].bundle.js',
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
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8080,
        disableHostCheck: true,
        host: "0.0.0.0",
        open: true,
        hot: true
    },
    plugins: [
        new webpack.ProgressPlugin(), // 进度
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Data Structures',
            filename: 'index.html',
            template: 'public/index.html',
            favicon: 'public/favicon.ico'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
}