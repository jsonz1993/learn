/**
 * Created by Jsonz on 2016/3/24.
 * �����ļ� ����
 * productArr ��Ʒ��Ϣ Array [��Ʒid���ļ���/�ļ�����]
 * isArr ԭ���ǻ��� true/false
 * channel ������  ��֧��02/APP03
 * system ����ƽ̨ String android/ios
 * isTest �Ƿ��ǵ���ģʽ
 * environment ������ʶ [46|60|��]
 * ops/ocl ����url
 */

seajs.config({
    // ��������
    alias : {
        vue : './vue',
        jquery : './jquery-1.11.2.min',
        base : './base',
        data : './data',
        Util : './Util'
    },

    /*
     ��������� require('data') ������ './js/data'
     */

    // ·������
    paths : {},

    /*
     Ŀ¼�Ƚ�����Զ��� paths
     var underscore = require('gallery/underscore');
     ʵ�����Ǽ��� brown/js/jquery/underscore
     */

    // ��������
    vars : {
        'locale' : 'zh-cn'
    },
    /*
     var lang = require('./li8n/{locale}.js')
     lang = require('./li8n/zh-cn.js');
     */

    // ӳ������
    map: [

    ],

    /*
     ['-debug.js']
     var a = require('./a')
     ���ص��� a-debug.js
     */

    // Ԥ������
    preload : [],

    // ����ģʽ
    debug: true,

    // Sea.js �Ļ���·��
    base: '',

    // �ļ�����
    charset: 'utf-8'
});



define(function(require, exports, module){
    var Conf = function(args){

        var instance = this;
        args = args || {};


        // 1.��Ʒid���ļ���
        this.productArr = [];
        (function(){
            var href = window.location.href,
                arr = href.split('/');
            instance.productArr = arr.slice(arr.indexOf('vue-xd') + 1);
        }());

        // 2. ԭ����
        this.isApp = true;

        // 3.������
        if (this.isApp) {
            this.channel = '03';
        } else {
            this.channel = '02';
        }

        // 4.����ƽ̨
        this.system = 'android';
        if (navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
            this.system = 'ios';
        }

        // �Ƿ�Ϊ����ģʽ
        this.isTest = true;

        // ������ʶ
        this.environment = '46';

        // ����url
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

