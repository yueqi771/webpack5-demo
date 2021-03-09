let path = require('path');
let webpack = require('webpack');
let HTMLWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: "development",
    devtool: false,
    entry: './src/index.js',
    output: {
        publicPath: 'http://localhost:8081/',
    },
    devServer: {
        port: 8081
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
            name: 'hostVar', // 输出的模块名
            filename: 'hostVar.js',
            // 引用
            remotes: {
                remote: 'remote@http://localhost:8080/remoteEntry.js'
            },
            // 暴漏
            exposes: { // 被引用时暴漏的模块名
                "./Slider": "./src/Slider"
            },
            shared: ['react', 'react-dom']
        })
    ]
}