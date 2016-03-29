/**
 * Created by Jsonz on 2016/3/29.
 */

seajs.config({
    // 别名配置
    alias : {
        app : './app',
        'data' : './data',
        'jquery' : './jquery-1.8.3.min'
    },

    /*
     后面可以用 require('data') 来加载 './js/data'
     */

    // 路径配置
    paths : {
        'gallery': 'brown/js/jquery'
    },

    /*
    目录比较深可以定义 paths
     var underscore = require('gallery/underscore');
      实际上是加载 brown/js/jquery/underscore
     */

    // 变量配置
    vars : {
        'locale' : 'zh-cn'
    },
    /*
    var lang = require('./li8n/{locale}.js')
        lang = require('./li8n/zh-cn.js');
     */

    // 映射配置
    map: [
        ['-debug.js']
    ],

    /*
    var a = require('./a')
        加载的是 a-debug.js
     */


    // 调试模式
    debug: true,

    // Sea.js 的基础路径
    base: 'http://example.com/path/to/base/',

    // 文件编码
    charset: 'utf-8'
});


