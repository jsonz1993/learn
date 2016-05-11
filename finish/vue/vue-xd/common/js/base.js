/**
 * Created by Jsonz on 2016/3/24.
 *
 * storage 本地存储 {{object}} @set 设置 @get获取 @remove删除某key @clear清除所有
 * verify 表单验证 getAllVerify 返回
 * 2. tokenData
 * 3. deviceFingerprint
 *
 */

define(function(require, exports, module){
    var Util = require('Util'),
        conf = require('./conf'),
        data = require('data'),
        $ = require('jquery');


    var Base = {


        /**
         * storage 本地存储
         * 根据 conf.isTest 判断调用原生存储
         * set(key, val, [type|'localStorage'|'sessionStorage']) 不传默认 localStorage
         * get(key, type) 不传默认localStorage 获取不到就去找 sessionStorage
         * remove(key, type) 清除 key 。type 不传默认 localStorage,传 all 清除两个
         * @type {{set, get, remove}}
         */
        storage : (function(){

            var _set,_get;

            if (conf.isTest) {
                // 调用原生window存储
                _set = function(key, val) {
                    window.localStorage.setItem(key, val);
                };

                _get = function(key) {
                    return window.localStorage.getItem(key);
                }
            } else {
                // APP提供API

            }

            return {
                set : function() {
                    _set.apply(null,arguments);
                },
                get : function() {
                    _get.apply(null,arguments);
                }
            };
        }()),

        /**
         * verify 表单验证
         * verifyFn 验证表单
         * inputCheck 添加事件及dom元素
         * inputCheckAll 初始化事件
         * getAllVerify @el 从哪个父元素开始验证，不传则整个body。返回 true || false
         *
         */
        verify : (function(){
            var $em = $('[verify]'),
                _class = 'error_info_hide';

            // 验证逻辑
            var verifyFn = function($em, type) {
                $em = $em instanceof $ ? $em : $($em);
                var val = $em.val().trim(),
                    comVerify = data.verify,
                    comVerifyType = comVerify[type],
                    _obj = {
                        type : true
                    };

                // 判断是否存在验证规则，不存在则返回
                if (!comVerify || !comVerifyType) {
                    console.warn('不存在验证规则', $em.attr('id'));
                    return _obj;
                }

                // 判断是否为空与能否为空，不能则再验证
                if (val === '' && comVerifyType.notNull) {
                    _obj.msg = comVerifyType.noVal;
                    _obj.type = false;
                } else if (!comVerifyType.reg.test(val)) {
                    _obj = {
                        type : false,
                        msg : comVerifyType.msg
                    }
                }
                return _obj;
            };

            // 绑定事件 操作dom
            var inputCheck = function($em) {
                var bool = {};

                $em.data('verify', false).parents('.content_input').append('<p class="error_info error_info_hide"></p>');
                $em.on('blur.inputCheck',function(){
                    var $this = $(this);
                    bool = verifyFn($this, $this.attr('verify'));
                    var $error = $this.parents('.content_input').find('.error_info');

                    if (bool.type) {
                        $error.addClass(_class);
                    } else {
                        $error.text(bool.msg).removeClass(_class);
                    }

                    $this.data('verify', bool.type);
                });

                return bool;
            };

            // 初始化事件
            var inputCheckAll = function() {
                $em.each(function(){
                    inputCheck($(this));
                });
            };

            inputCheckAll();

            // 获取范围内是否有不符合的选项，返回Boolean
            var getAllVerify = function(_el){

                var allTrue = true,
                    _$em = null;
                if (typeof _el === 'undefined') {
                    _$em = $em;
                } else {
                    var $el = _el instanceof $ ? _el : $(_el);
                    if ($el.length !== 0) {
                        _$em = $el.find('[verify]');
                    }
                }

                _$em.each(function(){
                    if (!$(this).data('verify')) {
                        $(this).parents('.content_input').find('.error_info').text(data.verify[$(this).attr('verify')].msg).removeClass(_class);
                        allTrue = false;
                        return false;
                    }
                });

                return allTrue;
            };

            return {
                em : $em,
                getAllVerify : function(el){
                    return getAllVerify(el)
                }
            }
        }())
    };

    console.log(1);

    exports.Base = Base;
});
