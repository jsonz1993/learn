var webpack = require('webpack');

module.exports = {
    entry : ['./src/entry.js'],
    output : {
        path : __dirname,
        filename : './build/build.js'
    },
    module : {
        loaders : [
            {test : /\.css$/, loader : 'style!css'},
            {test : /\.(png|jpg)$/, loader: 'url?limit=8192'}
        ]
    }
};

