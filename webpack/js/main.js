/**
 * Created by Jsonz on 2016/4/1.
 */
document.getElementById('app').innerHTML = '我的第一个打包';

require('./first.js');
require('../style/style.css');

var Vue = require('vue');
new Vue({
    el : 'body',
    data : {
        message : 'hello vue.js'
    }
});