/**
 * Created by Jsonz on 2016/3/23.
 */

// TODO 单例
(function(){
    var mySingleton = (function(){
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
var emailRE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var todoList = new Vue({
    el : '#todoList',
    data : {
        users : [],
        newUser : {
            name : '',
            email : ''
        },
        errors : [
            'Name cannot be empty.',
            'Please provide a valid email address.'
        ]
    },
    computed : {
        validation : function(){
            return {
                name : !!this.newUser.name.trim(),
                email : emailRE.test(this.newUser.email)
            }
        },
        isValid : function(){
            var validation = this.validation;
            return Object.keys(validation).every(function (key){
                return validation[key];
            });
        }
    },
    methods : {
        addUser : function() {
            if (this.isValid()) {
                this.users.push({name : this.newUser.name , email : this.newUser.email});
                for (var i in this.newUser) {
                    this.newUser[i] = '';
                }
            }
        },
        remove : function(index) {
            this.users.splice(index, 1);
        }
    }
});

Vue.component('tableTemp', {
    template : '#tableTemp',
    props : {
        columns : Array,
        data : Array,
        filterKey : String
    },
    data : function(){
        var itemEl = '';
        var itemList = {};

        this.columns.forEach(function(key){
            itemList[key] = 1;
        });
        return {
            itemEl : itemEl,
            itemList : itemList
        }
    },
    methods : {
        choose : function(key) {
            this.itemEl = key;
            this.itemList[key] *= -1;
        }
    }
});


var tableTmpe = new Vue({
    el : '#demo',
    data : {
        searchQuery : '',
        gridColumns : ['name', 'power'],
        gridData : [
            { name: 'Chuck Norris', power: 2000 },
            { name: 'Bruce Lee', power: 9000 },
            { name: 'Jackie Chan', power: 7000 },
            { name: 'Jet Li', power: 8000 }
        ]
    }
});

















