
var path = require('path');

module.exports = {
    entry: './src/main.js',

    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].js',
        publicPath: '/dist/'
    },

    devServer: {
        historyApiFallback: true,
        hot: false,
        inline: true,
        grogress: true,
    },

    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.vue$/, loader: 'vue' },
            { test: /\.less$/, loader: 'style!css!less' },
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
            { test: /\.html$/, loader: 'html' }
        ]
    },

    vue: {
        loaders: {
            css: 'style!css!postcss'
        }
    },


    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    
    resolve: {
        extensions: ['', '.js', '.vue'],
        alias: {
            filter: path.join(__dirname, './src/filters'),
            components: path.join(__dirname, './src/components')
        }
    }
};