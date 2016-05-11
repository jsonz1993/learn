<script>
	import data from '../js/data.js';
	import Util from '../js/util.js';

	export default {
        props : [],

		data : function(){
			return {
                item : '',
                menus : data.fetch().menu

			}
		},

        asyncData : function(resolve, reject) {
        	var self = this;
            setTimeout(function() {
                resolve({
                    item: self.menus[self.getRandom()]
                })
            }, 1000)
        },

		computed : {
            random : function() {
                return this.getRandom();
            },
            defaultImg : function(){
                return data.fetch().img[this.random];
            }
		},

		methods : {
			goBack : Util.goBack,

			getRandom : function(){
				return Util.getRandom(0, data.fetch().menu.length);
			},

            reChoose : function(){
                this.item = this.menus[this.getRandom()];
            }
		}
	}

</script>

<template>
	<header>
		<span class="left" @click="goBack">后退</span>
		<h1>去吃啥?</h1>
	</header>
	<div class="main">
        <div v-if="item" class="asi-card" :style="{backgroundImage:'url(./src/images/' + item.img +')'}">
			<div class="asi-card-title">
				<span>{{item.text}}</span>
			</div>
		</div>
		<div v-if="!item" class="asi-card" :style="{backgroundImage:'url(./src/images/' + defaultImg +')'}">
			<div class="asi-card-title">
				<span>请返回添加菜单</span>
			</div>
		</div>
		<div class="re-asi-btn" @click="reChoose">
			不对不对，在选一次!
		</div>
	</div>
</template>

<style lang="less">
	.asi-card {
		background-size : cover;
		background-position: center;
		height: 26rem;
		width: 99%;
		border-right: 2px;
		box-shadow: 1px 1px 10px rgba(0, 0, 0, .49);
		position: relative;
		margin: .5%;
		float: left;
	}

	.asi-card-title {
		background-color: rgba(173, 171, 163, 0.7);
		color: #fff;
		position: absolute;
		bottom: 0px;
		height: 6rem;
		width: 100%;
		padding: 20px 10px;
	}

	.re-asi-btn {
		position: fixed;
		bottom: 0;
		width: 100%;
		padding: 15px;
		background-color: #4AA6FF;
		color: #fff;
		text-align: center;
		display: block;

	}
</style>