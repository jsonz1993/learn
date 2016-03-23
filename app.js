/**
 * Created by Jsonz on 2016/3/23.
 */

// TODO 单例
(function(){
    var mySingleton = (function(){
        debugger;
        var instance;

        function Singleton(args) {
            this.args = args || {};

            this.name = args.name || 'jsonz';
        }


        return {
            getSingleton : function(args){
                if (instance === undefined) {
                    instance = new Singleton(args)
                }

                return instance;
            }
        }
    })();


    var a = new mySingleton.getSingleton({name : 'zhangxinxin'});
    var b = new mySingleton.getSingleton();
    console.log(a === b);
})();

//TODO 单例
(function(){
    function Singleton(name) {

        var instance = this;

        this.name = name;

        Singleton = function() {
            return instance;
        }
    }

    var a = new Singleton('zhang');
    var b = new Singleton();
    console.log(a === b);
})();

// TODO 单例
(function(){
    function Singleton(name) {
        if (typeof Singleton.instance === 'object') {
            return Singleton.instance;
        }

        Singleton.instance = this;

        this.name = name || 'jsonz';
    }

    var a = new Singleton('zhang');
    var b = new Singleton('xinxin');
    console.log(a === b);
})();

var todoList = new Vue({
    el : '#todoList',
    data : {
        user : [],
        newUser : {
            name : '',
            email : ''
        }
    },
    methods : {
        addUser : function() {
            this.user.push(this.newUser);
            this.newUser.name = '';
            this.newUser.email = '';
        },
        remove : function(index) {
            this.user.slice(index, 1);
        }
    }
});





















