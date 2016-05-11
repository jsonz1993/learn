<script>
	import data from '../js/data.js';
	import popup from './popup.vue';
	import Util from '../js/util.js';

	var datas = data.fetch();

	export default {
		data : function(){
			return {
				img : datas.img,

				menus : datas.menu,

				popData : {
					show : '',
					title : '',
					input : false,
					del : false,
					cancel : false,
					done : false
				},

				index : '',
			}
		},

		computed : {
			bgColor : function() {
				return {
					opacity : '.3'
				}
			}
		},

		methods : {
			goBack : Util.goBack,
			add : function(){
				this.popData = Object.assign(this.popData, {
					title : '添加',
					done : true,
					input : true,
					del : false,
					cancel : false
				});

				this.showPop();
			},

			del : function(index){
				this.popData = Object.assign(this.popData, {
					title : '确定要删除?',
					del : true,
					cancel : true,
					input : false,
					done : false
				});
				this.showPop();
				this.index = index;
			},

			save : function(menu){
				this.menus.push({
					text : menu,
					img : this.img[this.getRandom()]
				})
			},

			delete : function(){
				this.menus.splice(this.index, 1);
			},

			showPop : function(){
				this.popData.show = true;
			},

			getRandom : function(){
				return Util.getRandom(0, datas.img.length);
			}
		},

		components : {popup},

		watch : {
			'menus' : function(){
				data.save(this.menus);
			}
		}
	}

</script>

<template>
	<header>
		<h1>
			<span class="left" @click="goBack">后退</span>
			去吃啥?{{title}}
			<span class="right" v-link="{ path: '/show' }">选好了</span>
		</h1>
	</header>
	<div class="main">
		<ul>
			<li :style="{backgroundImage:'url(./src/images/' + menu.img +')'}" v-for="menu in menus" @click="del($index)">
				<div class="card">
					<span>{{menu.text}}</span>
				</div>
			</li>
			<li v-show="!menus.length"  :style="{backgroundImage:'url(./src/images/' + img[getRandom()] +')'}" class="no_menu" @click="add">
				<div class="card">
					<span>添加你的选择</span>
				</div>
			</li>
		</ul>
		<div class="add" @click="add">
			<span>+</span>
		</div>
	</div>


	<popup :datas.sync="popData" :index="index"
			@done="save" @del="delete">
	</popup>

</template>

<style lang="less" scoped>
	ul {

	}
	li {
		width: 49%;
		height: 26rem;
		border-radius: 2px;
		box-shadow: 1px 1px 10px rgba(0,0,0,0.49);
		position: relative;
		margin: .5%;
		float: left;
		background-position: center;
		background-size: cover;
	}

	.card {
		background-color: rgba(173, 171, 163, 0.7);
		position: absolute;
		bottom: 0;
		height: 5rem;
		line-height: 5rem;
		color: #fff;
		width: 100%;
		text-align: center;

		span {
			font-size: 1.5rem
		}
	}

	.add {
		background-color: #e91e63;
		position: fixed;
		bottom: 1rem;
		right: 1rem;
		width: 4rem;
		border-radius: 100%;
		text-align: center;
		box-shadow: 1px 5px 8px rgba(0,0,0,.34);

		span {
			font-size: 3rem;
			color: #fff;
			line-height: 4rem;
		}
	}

	.no_menu {
		opacity: .3;

		.card {
			background-color: rgba(61, 61, 62, 0.52);
		}
	}

	
</style>