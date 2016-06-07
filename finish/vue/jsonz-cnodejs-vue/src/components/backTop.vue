<template>
	<div class="back-top" v-show="show">
		<a href="#" @click.prevent.stop="toTop">回到顶部</a>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				show : false // 初始化是隐藏的
			};
		},

		methods: {
			toTop() {
				document.body.scrollTop = 0; // 点击后返回到顶部
			}
		},

		ready() {
			// ready后 给window绑定onscroll事件。判断400显示隐藏按钮
			const scroll = () => {
				if (document.body.scrollTop > 400) {
					this.show = true;
				} else {
					this.show = false;
				}
			}
			window.addEventListener('scroll', scroll, false);
		},

		// 摧毁后接触绑定事件
		beforeDestroy() {
			window.removeEventListener('scroll', scroll, false);
		}
	}
</script>

<style lang="less">
	.back-top {
		padding: 8px 5px 8px 8px;
		border-radius: 8px 0 0 8px;
		position: fixed;
		right: 0;
		bottom: 98px;
		width: 16px;
		background-color: #fff;
	}
</style>