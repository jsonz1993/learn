/**
 * Created by Jsonz on 2016/3/29.
 */

define(function(require, exports, module){

    var log = function(arg){
        console.log('log ' + arg);
    };

    module.exports = {
        _try : function(arg) {
            console.log('_try ' + arg);
        },
        log : log
    }
});
