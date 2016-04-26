<script>
	export default {
		data : function(){
			return {
				text : 1,
				div : '<b>Hello World</b>',
				isTrue : true,
				isFalse : false,
				list : [
					{name : 'jsonz',age : 20},
					{name : 'zhang',age : 40},
					{name : 'xinxin',age : 30}
				]
			}
		},
		computed : {
			obj : function(){
				var _obj = {};
				for (var i = 0,len = this.list.length; i < len; i++) {
					_obj['name' + i] = this.list[i].age;
				}
				return _obj;
			}
		},
		methods : {
			fn : function(){
				console.log(this.isTrue);
			}
		}
	}
</script>

<template>
	<button @click="isTrue = !isTrue">按钮</button>
	<br>

	<span v-text="text"></span>
	<span>{{text}}</span>
	<br>

	<div v-html="div"></div>
	<br>

	<span v-if="isTrue">isTrue</span>
	<span v-if="isFalse">isFalse</span>
	<span v-else>v-else</span>
	<br>

	<span v-show="isTrue">isTrue</span>
	<span v-show="isFalse">isFalse</span>
	<br>

	<ul>
		<li v-for="item in list">{{item.name}} - {{item.age}}</li>
	</ul>

	<ul>
		<li v-for="(key, val) in obj">{{key}} - {{val}}</li>
	</ul>



	<br>

</template>

<style>
	
</style>