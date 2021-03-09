const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: "development",
    devtool: false,
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: '[name].js', // 入口模块的生成规则
        chunkFilename: '[name].js' // 非入口模块的生成规则
    },
    optimization: {
        useExports: true, // 标注没有使用到的模块
        moduleIds: 'deterministic', // 模块名称的生成规则， natural: 自然数, deterministic: 根据模块名称生成的确定hash值. named:  路径 + 名字
        chunkIds: 'deterministic', // 代码名称的生成规则，natural: 自然数， deterministic: 根据模块名称生成的确定hash值。 named: 路径 + 名字
    },
    cache: {
        type: 'filesystem', // memory filesystem
        // cacheDirectory
    },
    // 配置webpack5的poilfyl
    resolve: {
        fallback: {
            'crypto': require.resolve('crypto-browserify'),
            'stream': require.resolve('stream-browserify'),
            'buffer': require.resolve('buffer') // 不需要的话直接设置为false
        }
    },
    devServer: {
        port: 8080
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader:'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env', // es6转es5
                                '@babel/preset-react' // jsx转js
                            ]
                        }
                    }
                    
                ]
            },
            {
                test: /\.png$/,
                type: 'asset/resource', // file-loader
            },
            {
                test: /\.ico$/,
                type: 'asset/inline', // url-loader, 模块大小小于limit base64字符串
            },
            {
                test: /\.txt$/,
                type: 'asset/source', // 对标raw-loader
            },
            {
                test: /\.jpg$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 4 * 1024
                    }
                }
            }
        ]
    },

    plugins: [
        new htmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}