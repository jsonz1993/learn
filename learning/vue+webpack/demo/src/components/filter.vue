<script>
	export default {
		props : ["msg"],
		data : function(){
			return {
				text : '1',
				capitalize : 'abcd',
				uppercase  : 'abdc',
				lowercase  : 'ABCD',
				currency  : '1234',
				obj : {
					name : 'jsonz',
					age : '20'
				},
				nowTime : '',
				limitBy : [1,2,3,4,5,6,7,8,9,10],
				filterBy : '',
				orderBy : [
					{
						name : 'jsonz',
						age : 20
					},
					{
						name : 'zhang',
						age : 23
					}
				]
			}
		},
		methods : {
			tKeyup : function(){
				console.log(this.nowTime = new Date().getTime());
			},
			tKeyDown : function(){
				console.log(new Date().getTime() - this.nowTime);
			}
		},
		filters : {
			tt : {
				// model -> view
				// 在更新 `<input>` 元素之前格式化值
				read: function(val) {
					if (!val) return;
					val = parseFloat(val);
					return '$'+val.toFixed(2)
				},
				// view -> model
				// 在写回数据之前格式化值
				write: function(val, oldVal) {
					var number = +val.replace(/[^\d.]/g, '')
					return isNaN(number) ? 0 : parseFloat(number.toFixed(2))
				}
			}
		}
	}
	
</script>

<template id="list">
	<span>基础过滤器 {{msg | reverse}}</span>
	<div>
		<p>双向过滤器</p>
		<input type="text" v-model="text | tt">
		<br>
		<b>Model Value : {{text}}</b>
	</div>

	<div>
		内置过滤器
		<ul>
			<li>capitalize - {{capitalize}} - {{capitalize | capitalize}}</li>
			<li>uppercase  - {{uppercase }} - {{uppercase | uppercase }}</li>
			<li>lowercase  - {{lowercase }} - {{lowercase | lowercase }}</li>
			<li>currency  - <input type="text" v-model="currency"> {{currency | currency '人名币'}}</li>
			<li>json - {{obj}} - <pre>{{obj | json 4}}</pre></li>
			<li>debounce 处理器延迟x秒 <input type="text" @keyup="tKeyup" @keydown="tKeyDown | debounce 1000"></li>
			<li><input type="text" v-model="filterBy"></li>
			<li>
				<template v-for="item in limitBy | limitBy 7 2 | filterBy filterBy">
						{{item}} -
				</template>
			</li>
			<li >
				<template v-for="user in orderBy | orderBy 'name' ">
					{{ user.age }}- {{ user.name }}
				</template>
			</li>
		</ul>
	</div>

	<h3>数组扩展方法 </h3>
</template>