<template>
<div>
    <h1>姓名：{{name}}</h1>
    <h2>{{age}}</h2>
    <button @click="golist">$route.router.go 查看</button>
    <a v-link="{ name : 'list' }">v-link 查看列表</a>
    <a v-link="{ name : 'hello' }">查看嵌套的hello路由</a>
    <a v-link="{ name : 'index' }">回去主页</a>
</div>

<router-view></router-view>

</template>
<script>
	var hello = require('./hello.vue');

	module.exports = {
		data : function(){
			return {
				name : 'zhangxinxin',
				age : '23'
			}
		},
		methods : {
			golist : function(){
				this.$route.router.go({name : 'list'})
			}
		},
		components : {
			hello // 如果是更多组件，以逗号分割
		}
	}
</script>