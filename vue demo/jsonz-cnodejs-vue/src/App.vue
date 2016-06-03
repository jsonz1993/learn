<template>
	<div id="app">
		<c-header></c-header>
		<div class="main">
			<router-view></router-view>
		</div>
		<c-footer></c-footer>
		<c-back></c-back>
	</div>
</template>

<script>
import cHeader from './components/header';
import cFooter from './components/footer';
import cBack from './components/backTop';
export default {
	components : {
		cHeader,
		cFooter,
		cBack
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