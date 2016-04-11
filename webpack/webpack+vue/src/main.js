/**
 * Created by Administrator on 2016/4/11.
 */

// 引入vue 和 vue-router
var VueRouter = require('vue-router'),
	Vue = require('vue');

Vue.use(VueRouter);

// 引入组件
var index = require('./components/app.vue'),
	list = require('./components/list.vue'),
	hello = require('./components/hello.vue');

// 开启debug模式
Vue.config.debug = true;

// new Vue(app)  现在使用vue-router 就不需要这样

var App = Vue.extend({}), // 路由器需要一个根组件
    router = new VueRouter();//创建一个路由器实例

// 定义路由器映射
router.map({
	'/index' : { // 访问地址
		name : 'index', // 定义路由的名字，方便使用
		component : index, // 引用的组件名称，对应上面require引入组件
		// component: require('components/app.vue') 也可以这样引入
		subRoutes : {
			'hello' : {
				name : 'hello', // 可有可无，方便其他地方调用
				component : hello
			}
		}
	},
	'/list' : {
		name : 'list',
		component : list
	}
});

router.redirect({ // 定义全局的重定向规则。全局的重定向会在匹配当前路径之前执行。
	'*' : '/index'
});

// 路由器会创建一个APP实例，并且挂载在#app 匹配的元素上
router.start(App, '#app');



