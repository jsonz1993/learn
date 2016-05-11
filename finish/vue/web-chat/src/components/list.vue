<script>
	 export default {
        props : ['userList', 'search', 'userIndex'],

        data : function(){
            return {
                isTrue : true
            }
        },

        methods : {
            chooseThis : function(index){
                this.userIndex = index;
            }
        }
     }
</script>

<template>
	<div class="m-list">
		<ul>
			<li v-for="user in userList | filterBy search in 'name' " :class="{active : $index === userIndex}" @click="chooseThis($index)">
				<img class="avatar" width="30" height="30" :src="user.img" :alt="user.name" :title="user.name">
				<p class="name">{{user.name}}</p>
			</li>
		</ul>
	</div>
</template>


<style lang="less">
    .m-list {
        li {
            padding: 12px 15px;
            border-bottom: 1px solid #292C33;
            cursor: pointer;
            transition: background-color .1s;
            
            &:hover {
                background-color: rgba(255, 255, 255, 0.03);
            }
            &.active {
                background-color: rgba(255, 255, 255, 0.1);
            }
        }
        .avatar, .name {
            vertical-align: middle;
        }
        .avatar {
            border-radius: 2px;
        }
        .name {
            display: inline-block;
            margin: 0 0 0 15px;
        }
    }
</style>