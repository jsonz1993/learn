/**
 * Created by Jsonz on 2016/3/24.
 * 配置文件 单例
 * productArr 产品信息 Array [产品id，文件名/文件夹名]
 * isArr 原生壳环境 true/false
 * channel 渠道号  翼支付02/APP03
 * system 运行平台 String android/ios
 * isTest 是否是调试模式
 * environment 环境标识 [46|60|等]
 * ops/ocl 环境url
 */

seajs.config({
    // 别名配置
    alias : {
        vue : './vue',
        jquery : './jquery-1.11.2.min',
        base : './base',
        data : './data',
        Util : './Util'
    },

    /*
     后面可以用 require('data') 来加载 './js/data'
     */

    // 路径配置
    paths : {},

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

    ],

    /*
     ['-debug.js']
     var a = require('./a')
     加载的是 a-debug.js
     */

    // 预加载项
    preload : [],

    // 调试模式
    debug: true,

    // Sea.js 的基础路径
    base: '',

    // 文件编码
    charset: 'utf-8'
});



define(function(require, exports, module){
    var Conf = function(args){

        var instance = this;
        args = args || {};


        // 1.产品id和文件名
        this.productArr = [];
        (function(){
            var href = window.location.href,
                arr = href.split('/');
            instance.productArr = arr.slice(arr.indexOf('vue-xd') + 1);
        }());

        // 2. 原生壳
        this.isApp = true;

        // 3.渠道号
        if (this.isApp) {
            this.channel = '03';
        } else {
            this.channel = '02';
        }

        // 4.运行平台
        this.system = 'android';
        if (navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
            this.system = 'ios';
        }

        // 是否为调试模式
        this.isTest = true;

        // 环境标识
        this.environment = '46';

        // 环境url
        switch (this.environment) {
            case '46' :
                this.ops = '';
                this.ocl = '';
                break;

            case '60' :
                this.ops = '';
                this.ocl = '';
                break;
        }


        Conf = function(){
            return instance;
        };
    };

    exports.conf = new Conf();
});

