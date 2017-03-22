const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const config = {
    entry: {
        main: './src/script/main.js',
        app: './src/script/app.js',
        b: './src/script/b.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name]-[chunkhash].js?',
        publicPath: 'http://cdn.com/', // 线上前缀地址
    },
    // module: {
    //     rules: [
    //         {test: /\.(js|jsx)$/, use: 'babel-loader'}
    //     ]
    // },
    plugins: [
        new HtmlWebpackPlugin({
            template: './a.html',
            filename: './a.html',
            inject: false,
            title: 'this is a.html',
            excludeChunks: ['b'], // 排除的chunks 其他都会被加入
            minify: {
                removeComments: true,
                // collapseWhitespace: true
            }
        }),
        new HtmlWebpackPlugin({
            template: './b.html',
            filename: './b.html',
            chunks: ['main', 'b'], // 要加入的 chunks 和下面选项二选一
            
            inject: 'body', 
            title: 'this is b.html',
            // 一部分初始代码，直接内嵌到页面，减少http请求
            minify: {
                removeComments: true,
                // collapseWhitespace: true
            }
        })
    ]
};

module.exports = config;