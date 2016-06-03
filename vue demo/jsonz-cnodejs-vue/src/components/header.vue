<template>
	<header>
		<a v-link="{name : 'index'}" class="brand">
			<img src="https://o4j806krb.qnssl.com/public/images/cnodejs_light.svg" alt="cnodejs-logo">
		</a>
		<ul class="navbar">
			<li><a v-link="{name: 'index'}">首页</a></li>
			<li v-if="!token">
				<a v-link="{name:'login'}">登入</a>
			</li>
			<template v-else>
				<li>
					<a <a v-link="{name:'messages'}">
						未读消息
						<span class="h" v-if="msgCount">{{ msgCount}}</span>
					</a>
				</li>
				<li>
					<a href="#" @click.prevent.stop="exit">退出</a>
				</li>
			</template>
		</ul>
	</header>
</template>

<script>
	import {
		changeToken,
		checkToken,
		fetchUser,
		fetchCollection,
		fetchMsgCount,
		delToken,
		changeLoginUser
	} from '../vuex/actions';
</script>

<style lang="less" scoped>
	header {
		overflow : hidden;
		background-color: #444;
		padding: 0 5%;
		margin-bottom: 20px;
	}

	.brand {
		float: left;
		width: 120px;
		height: 28px;
		padding: 5px 20px;
	}

	.navbar {
		float: right;
		overflow: hidden;
		display: block;

		li {
			float: left;
		}

		a {
			font-size: 13px;
			display: block;
		}
	}

 .h {
    background-color: #80BD01;
    height: 14px;
    min-width: 14px;
    padding: 0 2px;
    padding-top: 1px;
    margin-left: 1px;
    display: inline-block;
    font-size: 10px;
    line-height: 14px;
    text-align: center;
    border-radius: 10px;
    color: #FFF;
  }

  @media (max-width: 400px) {
    .brand {
      float: none;
      margin: 0 auto;
      display: block;
    }

    .navbar {
      float: none;
      text-align: center;

      li {
        float: none;
        display: inline-block;
      }
    }
  }
	


</style>