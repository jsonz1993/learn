var vm = new Vue({

});

var MyComponent = Vue.extend({

});

var myCOmponentInstance = new MyComponent();
var data = { a: 1 };
var vm = new Vue({
    el: '#example',
    data: data
});
vm.a == data.a;
vm.a = 2;
data.a; // 2

data.a = 3;
vm.a; // 3
vm.$data === data; // true
vm.$el = document.getElementById('example'); // true
vm.$watch('a', function() {
    // 这个回调会在 vm.a 改变后调用
});


var vm = new Vue({
	data: {
		a: 1
	},
	created: function() {
		console.log('a is:' + this.a);
	}
});
// mounted updated destyroyed, created