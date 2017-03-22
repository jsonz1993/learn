// 学习loader的时候开的一个新配置文件，正好可以考察之前学的怎样
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name]-[hash].bundle.js'
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                include: path.resolve(__dirname, 'src'), // 要打包的目录 和 exclude 可以配合使用
                loader: 'babel-loader',
                query: {
                    presets: ['latest']
                }
            },
            {
                test: /\.css$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                include: path.resolve(__dirname, 'src'),
                use: [{
                    loader: 'style-loader',
                }, {
                    loader: 'css-loader',
                }, {
                    loader: 'postcss-loader',
                    options: {
                        plugins: function () {
                            return [
                                require('autoprefixer')
                            ];
                        }
                    }
                }],
            },
            {
                test: /\.(less)$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                include: path.resolve(__dirname, 'src'), // 要打包的目录 和 exclude 可以配合使用
                use: [{
                    loader: 'style-loader',
                }, {
                    loader: 'css-loader',
                }, {
                    loader: 'postcss-loader',
                    options: {
                        plugins: function () {
                            return [
                                require('autoprefixer')
                            ];
                        }
                    }
                }, {
                    loader: 'less-loader'
                }],
            },
            {
                test: /\.(jpeg|png|jpg|svg|gif)$/i,
                exclude: path.resolve(__dirname, 'node_modules'),
                loader: 'file-loader'
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: 'body'
        })
    ]
};

module.exports = config;