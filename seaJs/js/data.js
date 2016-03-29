/**
 * Created by Jsonz on 2016/3/29.
 */

define(function(require, exports, module){
    var app = require('app'),
        $ = require('jquery');

    app._try('data');
    app.log('data');

    exports.add = function(){
        $('body').append('<h1>Hello World</h1>');
    }
});