/**
 * Created by Jsonz on 2016/3/29.
 */

define(function(require, exports, module) {

    exports.data = {
        verify : {
            name : {
                reg : /^[\u4e00-\u9fa5]{1,}[··•]{0,20}[\u4e00-\u9fa5]{1,}$/,
                noVal : '请输入姓名',
                msg : '请输入正确姓名',
                notNull: true
            },
            phone : {
                reg : /^((13[0-9])|(14[5,7,9])|(15[^4,\D])|(18[0-9])|(17[5-9]))\d{8}$/,
                noVal : '请输入手机号码',
                msg : '手机号码格式不对',
                notNull : true
            },
            verCode : {
                reg: /^\d{4,8}$/,
                noVal : '请输入验证码',
                msg : '请输入验证码',
                notNull : true
            },
            bankNo : {
                reg : /^\d{1,}$/,
                noVal : '银行卡号不能为空',
                msg : '请输入正确银行卡号',
                notNull : true
            }
        }
    };
});