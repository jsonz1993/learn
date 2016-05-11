<script>
	import data from '../js/data.js';

	var datas = data.fetch();

	export default {
		data : function(){
			return {
				bgUrl : '1.png',

				img : datas.img
			}
		},

		computed : {
			bgStyle : function(){
				return {
					backgroundImage : 'url(./src/images/' + this.img[0] + ')'
				}
			}
		}
	}

</script>

<template>
	<header>
		<h1>去吃啥?</h1>
	</header>
	<div class="main" :style="bgStyle">
		<div class="bottom">
			<button class="button_bottom" v-link="{ path: '/list' }">
				马上选出吃什么!
			</button>
			<p class="info_bottom">选择困难症福音</p>
		</div>
	</div>
</template>

<style lang="less" scoped>
	
</style>