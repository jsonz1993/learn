/**
 * Created by Jsonz on 2016/4/1.
 */

var Webpack = require("webpack");

module.exports = {
    entry: ["./js/main.js"],
    output: {
        path: __dirname + '/build',
        filename: "build.js",
        publicPath : './build/'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.(png|jpg)$/, loader: "url?limit=20120" }// 会按照文件大小, 或者转化为 base64, 或者单独作为文件
            //在大小限制后可以加上&name=./[name].[ext]，会将我们的文件生成在设定的文件夹下。
        ]
    }
};