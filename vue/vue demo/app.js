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
Vue.component('demo-grid', {
    template: '#grid-template',
    props: {
        data: Array,
        columns: Array,
        filterKey: String
    },
    data: function () {
        var sortOrders = {};
        this.columns.forEach(function (key) {
            sortOrders[key] = 1
        });
        return {
            sortKey: '',
            sortOrders: sortOrders
        }
    },
    methods: {
        sortBy: function (key) {
            this.sortKey = key;
            this.sortOrders[key] = this.sortOrders[key] * -1;
        }
    }
});

// bootstrap the demo
var demo = new Vue({
    el: '#demo',
    data: {
        searchQuery: '',
        gridColumns: ['name', 'power'],
        gridData: [
            { name: 'Chuck Norris', power: Infinity },
            { name: 'Bruce Lee', power: 9000 },
            { name: 'Jackie Chan', power: 7000 },
            { name: 'Jet Li', power: 8000 }
        ]
    }
});

Vue.component('jsonzTable', {
    template : '#jsonzGridTemplate',
    props : {
        data : Array,
        columns : Array,
        filterKey : String
    },
    data : function(){
        var sortOrders = {};
        this.columns.forEach(function(key){
            sortOrders[key] = 1;
        });
        return {
            sortKey : '',
            sortOrders : sortOrders
        }
    },
    methods : {
        sortBy : function(key) {
            this.sortKey = key;
            this.sortOrders[key] *= -1;
        }
    }
});

var jsonzDemo = new Vue({
    el : '#jsonzDemo',
    data : {
        searchQuery : '',
        gridColumns : ['name', 'power'],
        gridData : [
            { name: 'Chuck Norris', power: Infinity },
            { name: 'Bruce Lee', power: 9000 },
            { name: 'Jackie Chan', power: 7000 },
            { name: 'Jet Li', power: 8000 }
        ]
    }
});
