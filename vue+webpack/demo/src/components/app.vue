<script>
	import list from './list.vue';
	import home from './home.vue';
	import filter from './filter.vue';
	import test from '../test.vue';

	export default {
		el : '#example',
		data : {
			msg : 'hello',
			text : '',
			tog : 'home',
			view : 'aa',
			message : 'test'
		},
		components : {
			list,
			home,
			filter,
			test
		},
		methods : {
			t : function() {
				console.log(1);
			},
			a : function(msg) {
				this.text = msg;
			},
			toggle : function() {
				// 更新dom调用
				Vue.nextTick(function () {
				  console.log('dom更新了')
				})
				this.tog = this.text === 'list' ? 'list' : 'home';
			}
		},

		events: {
		    
		}
	}

	Vue.component('aa', {
	  // prop 可以用在模板内
	  // 可以用 `this.msg` 设置
	  template: '<p>components A</p>'
	});

	Vue.component('bb', {
	  // prop 可以用在模板内
	  // 可以用 `this.msg` 设置
	  template: '<p>components B</p>'
	});



	

</script>

	
<template>
	<test></test>
	<br>
	{{tog}}
	<component :is="tog">
	  <!-- 组件在 vm.currentview 变化时改变 -->
	</component>
	<div id="ddd">
		ddd
	</div>
	<input type="text" v-model="text" @keyup="toggle">

<!-- 	<list :msg="text" @b="a" try="yoyo">
		<p slot="A">This is slot A</p>
		<p slot="B">This is slot B</p>
	</list> -->


	<!-- 先淡出再淡入 -->
	<label for="aa"><input type="radio" v-model="view" value="aa" id="aa">AA</label>
	
	<label for="bb"><input type="radio" v-model="view" value="bb" id="bb">BB</label>
	
	{{view}}
	<component
	  :is="view"
	  transition="fade"
	  transition-mode="out-in">
	</component>

	<filter :msg="msg" :text="text"></filter>

</template>


<style>
	.fade-transition {
	  transition: opacity .3s ease;
	}
	.fade-enter, .fade-leave {
	  opacity: 0;
	}
</style>