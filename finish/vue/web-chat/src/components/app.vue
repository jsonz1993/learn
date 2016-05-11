<script>
	import storage from '../js/storage.js';
	import card from './card.vue';
	import userList from './list.vue';
	import message from './message.vue';
	import text from './text.vue';

	export default {
		el : '#chat',

		// 数据
		data : function(){
			var _data = storage.fetch();
			return {
				_data : _data, // storage 数据

				user : _data.user,// 当前用户

				search : '', // 搜索字段

				userIndex : _data.userIndex || 0, // 当前会话

				userList : _data.userList, // 好友列表

				messageList : _data.sessionList, // 会话列表

				text : '', // 发送的信息

				showContextMenu : false // 右键
			}
		},

		// 组件
		components : {
			card,
			userList,
			message,
			text
		},

		//getting setting
		computed : {
			messages : function(){
				return this.messageList[this.userIndex]
			}
		},

		watch : {
			'[messageList,userIndex]' : {
				deep : true,
				handler : function(){
					storage.save({
						userIndex : this.userIndex,
						user : this.user,
						userList : this.userList,
						sessionList : this.messageList
					})
				}
			}
		},

		filters : {

		},

		methods : {
			APPCLICK : function(){
				this.showContextMenu = false;
			}
		}
	}
</script>

<template>
	<div @click="APPCLICK()">
        <div class="sidebar">
			<card :user="user" :search.sync="search"></card>
			<user-list :user-list="userList" :search="search" :user-index.sync="userIndex"></user-list>
        </div>
        <div class="main">
            <message :message-list="messages" :user-list="userList" :user="user" :show-context.sync="showContextMenu"></message>
            <text  :text="text" :messages.sync="messages"></text>
        </div>
    </div>
</template>

<style lang="less">
	#chat {
		overflow: hidden;
        border-radius: 3px;
        
        .sidebar, .main {
            height: 100%;   
        }
        .sidebar {
            float: left;
            width: 200px;
            color: #f4f4f4;
            background-color: #2e3238;
        }
        .main {
            position: relative;
            overflow: hidden;   
            background-color: #eee;
        }
        .m-text {
            position: absolute;
            width: 100%;
            bottom: 0;
            left: 0;
        }
        .m-message {
            height: ~'calc(100% - 160px)';
        }
	}
</style>