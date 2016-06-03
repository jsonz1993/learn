<template>
	<div id="app">
		<c-header></c-header>
		<router-view></router-view>
	</div>
</template>

<script>
import cHeader from './components/header';
export default {
	components : {
		cHeader
	}
}
</script>

<style lang="less">
	html,
	#app {
		height : 100%;
	}

	body {
		height: 100%;
		font: 16px 'Microsoft YaHei', '微软雅黑';
		background-color: #E1E1E1;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	li {
		list-style: none;
	}

	a {
		color: #ccc;
		text-decoration: none;
	}

	img {
		vertical-align: middle;
		max-width: 100%;
	}

	.main {
		overflow: hidden;
		padding: 0 5%;
		min-height: 100%;
	}

</style>