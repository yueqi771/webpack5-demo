let path = require('path');
let webpack = require('webpack');
let HTMLWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: "development",
    devtool: false,
    entry: './src/index.js',
    output: {
        publicPath: 'http://localhost:8080/',
    },
    devServer: {
        port: 8080
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-react"]
                    },
                },
                exclude: /node_modules/,
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './public/index.html'
        }),
        new ModuleFederationPlugin({
            filename: 'remoteEntry.js', // 构建出的文件名
            name: 'remote', // 输出的模块名
            exposes: { // 被引用时暴漏的模块名
                "./NewList": "./src/NewList"
            },
            remotes: {
                remote: 'hostVar@http://localhost:8081/hostVar.js'
            },
            shared: ['react', 'react-dom']
        })
    ]
}