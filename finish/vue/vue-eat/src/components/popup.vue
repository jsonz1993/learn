<script>
	export default {
		props : ['datas', 'index'],

		data : function(){
			return {
				menu : ''
			}
		},

		methods : {
			del : function(){
				this.hidePop();
				this.$dispatch('del');
			},

			done : function(){
				this.hidePop();
				this.menu && this.$dispatch('done', this.menu);
				this.menu = '';
			},

			hidePop : function(){
				this.datas.show = false;
			}
		},

		computed : {

		},

		watch : {
			'datas.show' : function(){
				if (!this.datas.input) return;
				document.querySelector('.pop_body').children[0].focus();
			}
		}
	}
</script>

<template>
	<div class="pop_mask" v-show="datas.show">
		<div class="pop_wrap" @click.self="hidePop">
			<div class="pop_container">
				<div class="pop_header" v-show="datas.title">{{datas.title}}</div>
				<div class="pop_body" >
					<input v-show="datas.input" v-model="menu" @keyup.enter="done">
				</div>
				<div class="pop_footer">
					<button class="cancel_btn" @click="hidePop" v-show="datas.cancel">Cancel</button>
					<button class="doned_btn" @click="del" v-show="datas.del">Del</button>
					<button class="doned_btn" @click="done" v-show="datas.done">Done</button>
				</div>
			</div>	
		</div>
	</div>
</template>

<style lang="less">
	.pop_mask {
		font-family: '宋体';
		height: 100%;
		width: 100%;
		display: table;
		z-index: 999;
		position: fixed;
		left: 0;
		top: 0;
		background-color: rgba(0, 0, 0, .5);
		transition: opacity .3s ease;
	}
	.pop_wrap {
		width: 100%;
		height: 100%;
		display: table-cell;
		vertical-align: middle;
	}
	.pop_container {
		width: 80%;
		margin: 0 auto;
		background-color: #fff;
		padding: 2rem 1rem;
		box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
		border-right: 2px;
		transition: all .3s ease;
		position: relative;
		padding: 2rem 2rem 1rem;

		.pop_header {
			font-size: 1.5rem;
		}

		.pop_footer {
			margin: 3rem 0;
			text-align: center;

			button {
				background-color: rgba(0,0,0,0);
				border: none;
				position: absolute;
				bottom: .5rem;
				outline: none;
				padding: .6rem 1.2rem;
				border-radius: 5px;

				&:active {
					background-color: #929292;
					color: #fff;
				}
			}
		}

		.cancel_btn {
			right: 5rem;
			color: #666;
		}
		.doned_btn {
			right: 1rem;
			color: #2095f2;
		}

		input {
			outline: none;
			border: none;
			border-bottom: 1px solid #989898;
			width: 100%;
			margin-top: 2rem;
		}
	}
</style>