/**
 * Created by Jsonz on 2016/3/23.
 * 看一千遍不如自己造轮子撸一遍
 */

var marked = new Vue({
    el : '#editor',
    data : {
        text : '# hello markdown'
    },
    filters : {
        marked : marked
    }
});

var emailRE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

var validation = new Vue({
    el : '#validation',

    data : {
        users : [],
        newUser : {
            name : '',
            email : ''
        }
    },

    // getter 和 setter
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
        addUser : function(){
            if (this.isValid) {
                this.users.push({name : this.newUser.name, email : this.newUser.email});
                this.newUser.name = '';
                this.newUser.email = '';
            }
        },
        removeUser : function(index){
            this.users.splice(index, 1);
        }
    }
});


//表格
Vue.component('tableTemp', {
    template : '#jsonzTableTemp',
    props : {
        columns : Array,
        data : Array,
        filterKey : String
    },
    data : function(){
        var sortOrders = {};
        this.columns.forEach(function(key){
            sortOrders[key] = 1;
        });
        return {
            item : '',
            sortOrders : sortOrders
        }
    },
    methods : {
        choose : function(key) {
            this.item = key;
            this.sortOrders[key] *= -1;
        }
    }
});

var table = new Vue({
    el : '#table',
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




















