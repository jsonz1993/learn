<template>
	<div id="app">
		<c-header></c-header>
		<router-view></router-view>
		<ul>
			<li>1</li>
		</ul>
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

</style>