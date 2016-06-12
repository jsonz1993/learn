# jsonz-cnodejs-vue

[作者github](https://github.com/beilunyang/cnodejs-vue)

> vue vue-cli vuex vue-router

npm install

npm run dev

npm run build





## header.vue 顶部

	<header>
		<a v-link="{name: 'index'}" class="brand">
      <img src="https://o4j806krb.qnssl.com/public/images/cnodejs_light.svg" alt="cnodejs-logo">
    </a>
		<ul class="navbar">
			<li><a v-link="{name: 'index'}">首页</a></li>
			<li v-if="!token"><a v-link="{name: 'login'}">登入</a></li>
      <template v-else>
        <li><a v-link="{name: 'messages'}">未读消息<span class="h"  v-if="msgCount">{{ msgCount }}</span></a></li>
        <li><a href="#" @click.prevent.stop="exit">退出</a></li>
      </template>
		</ul>
	</header>


	<script>
	  import {
	    changeToken,
	    checkToken,
	    fetchUser,
	    fetchCollection,
	    fetchMsgCount,
	    delToken,
	    changeLoginUser,
	  } from '../vuex/actions';
	  import { getMsgCount, getToken } from '../vuex/getters';
	  export default {
	    vuex: {
	      actions: {
	        changeToken,
	        checkToken,
	        fetchUser,
	        fetchCollection,
	        fetchMsgCount,
	        delToken,
	        changeLoginUser,
	      },
	      getters: {
	        token: getToken,
	        msgCount: getMsgCount,
	      },
	    },
	    ready() {
	      // 从cookie中获取accesstoken
	      if (document.cookie.length > 0) {
	        // 如果有cookie,提取出token的值 t
	        const arr = document.cookie.split(';');
	        let t;
	        for (let v of arr) {
	          v = v.trim();
	          if (v.startsWith('token=')) {
	            t = v.split('=')[1];
	            break;
	          }
	        }
	        // 改变token的状态，检验token的正确性，从而进行一系列初始化工作
	        if (t) {
	          this.changeToken(t); // 改变token
	          this.checkToken(t) // 检查token有效性
	              .then(this.fetchUser)
	              .then((info) => {
	                this.changeLoginUser(info);
	                return info.loginname;
	              })
	              .then((name) => this.fetchCollection(name))
	              .then(() => this.fetchMsgCount(this.token));
	        }
	      }
	    },
	    methods: {
	      // 退出
	      exit() {
	        this.delToken(); // 删除token 
	        this.$route.router.go({ name: 'index' }); // 跳转到首页
	      },
	    },
	  };
	</script>


## footer.vue 底部信息

	<template>
		<footer>
			<div class="link">
				<a href="https://github.com/zhangxinxinWTB">Jsonz</a>
				<span>|</span>
				<a href="https://github.com/beilunyang/cnodejs-vue">源码</a>
			</div>
			<p>此网站仅为练习之作，采用vueJs + vue-router + vuex 搭建，感谢cnodejs社区提供API</p>
		</footer>
	</template>

## backTop.vue 返回顶部

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
						console.log(this);
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


## hint.vue 加载列表（ing,error）

	<template>
	  <div class="hint" :class="{ 'hint-failure': hint.colorRed }">
	    {{ hint.info }}
	  </div>
	</template>

	<script>
	  import { getHint } from '../vuex/getters';
	  export default {
	    vuex: {
	      getters: {
	        hint: getHint,
	      },
	    },
	  };
	</script>


## siderbar.vue 右侧信息栏 个人信息/登录/发布等

	<template>
	  <div class="siderbar">
	    <!-- 个人信息 积分等 -->
	    <div class="panel" v-if="$route.name === 'post' || $route.name === 'user' || token">
	      <div class="panel-header">
	        个人信息
	      </div>
	      <div class="inner padding">
	        <div class="user-info">
	          <a v-link="{ name: 'user', params: {name: user.loginname} }" class="user-logo"><img :src="user.avatar_url" alt="avatar"></a>
	          <a v-link="{ name: 'user', params: {name: user.loginname} }" class="user-name">{{ user.loginname }}</a>
	          <div class="user-score">积分：{{ user.score }}</div>
	        </div>
	      </div>
	    </div>
	    <!-- 个人信息 积分等 -->
	
	    <!-- 发布话题 -->
	    <div class="panel" v-if="token">
	      <div class="inner padding">
	        <a v-link="{name: 'create'}" class="btn btn-success">发布话题</a>
	      </div>
	    </div>
	    <!-- 发布话题 -->
	
	    <!-- 未登录的显示 -->
	    <div class="panel" v-if=" $route.name !== 'post' && $route.name !== 'user'  && !token">
	      <div class="panel-header">CNode：Node.js专业中文社区</div>
	      <div class="inner padding">
	        <div class="sign-about">您可以通过accessToken登入</div>
	        <a href="#" class="btn btn-primary" @click.prevent.stop="preLogin">通过token登入</a>
	      </div>
	    </div>
	  </div>
	  <!-- 未登录的显示 -->
	</template>


	<script>
	  import { getToken, getUser } from '../vuex/getters';
	  /* eslint-disable max-len */
	  import { changeLoginUser, changeToken, checkToken, fetchMsgCount, fetchCollection, fetchUser } from '../vuex/actions';
	  export default {
	    vuex: {
	      getters: {
	        token: getToken,
	        user: getUser,
	      },
	      actions: {
	        changeLoginUser,
	        changeToken,
	        checkToken,
	        fetchCollection,
	        fetchMsgCount,
	        fetchUser,
	      },
	    },
	    methods: {
	      // 优先从cookie中获得accesstoken并验证合法性，从而登入
	      preLogin() {
	        if (document.cookie.length > 0) {
	          const arr = document.cookie.split(';');
	          let t;
	          for (let v of arr) {
	            v = v.trim();
	            if (v.startsWith('token=')) {
	              t = v.split('=')[1];
	              break;
	            }
	          }
	          if (t) {
	            this.changeToken(t);
	            this.checkToken(t)
	                .then(this.fetchUser)
	                .then((info) => {
	                  this.changeLoginUser(info);
	                  return info.loginname;
	                })
	                .then((name) => this.fetchCollection(name))
	                .then(() => this.fetchMsgCount(this.token))
	                .then(() => {
	                  this.$route.router.go({ name: 'index' });
	                })
	                .catch(() => {
	                  this.$route.router.go({ name: 'login' });
	                });
	          } else {
	            this.$route.router.go({ name: 'login' });
	          }
	        } else {
	          this.$route.router.go({ name: 'login' });
	        }
	      },
	    },
	  };
	</script>

## pagination.vue 分页

	<template>
	  <nav class="pagination">
	    <a v-link="{name: 'tab', params: {tab: currentTab, page: currentPage - 1}}" class="pre"  v-if="currentPage !== 1">上一页</a>
	    <a v-link="{name: 'tab', params: {tab: currentTab, page: currentPage + 1}}" class="next">下一页</a>
	  </nav>
	</template>

	<script>
	  import { getCurrentPage, getCurrentTab } from '../vuex/getters';
	  export default {
	    vuex: {
	      getters: {
	        currentPage: getCurrentPage,
	        currentTab: getCurrentTab,
	      },
	    },
	  };
	</script>


## list.vue 文章列表

	<template>
	  <div class="inner">
	    <div class="topic-list">
	      <div class="cell" v-for="topicItem in items">
	        <span class="hello" v-if="!topicItem.author_id"></span>
	        <a v-link="{name: 'user', params: {name: topicItem.author.loginname}}" class="avatar"><img :src="topicItem.author.avatar_url" alt="avator"></a>
	        <span class="info-count" v-if="topicItem.author_id">
	          <span class="reply-count">{{ topicItem.reply_count }}</span>
	          <span class="seperator">/</span>
	          <span class="visited-count">{{ topicItem.visit_count }}</span>
	        </span>
	        <a href="#" class="last-time">
	          <span>{{ topicItem.last_reply_at | timeToNow}}</span>
	        </a>
	        <div class="topic-wrapper">
	          <a v-link="{name: 'post', params: {id: topicItem.id}}" title=" {{ topicItem.title }}">
	            <template v-if="topicItem.author_id">
	              <span class="top" v-if="topicItem.top">置顶</span>
	              <span class="top" v-else v-if="topicItem.good">精华</span>
	              <span class="top normal" v-if="!topicItem.top && !topicItem.good && topicItem.tab">{{ topicItem.tab }}</span>
	            </template>
	            {{ topicItem.title }}
	          </a>
	        </div>
	      </div>
	
	    </div>
	    <c-pagination v-if="items[0].author_id"></c-pagination>
	  </div>
	</template>

	<script>
	  import cPagination from './pagination';
	  export default {
	    props: ['items'],
	    components: {
	      cPagination,
	    },
	  };
	</script>

## page.vue 首页

	<template>
	  <div class="content">
	    <div class="panel">
	      <!-- 分类 -->
	      <div class="panel-header">
	        <a v-link="{name: 'tab', params: {tab: tab.ename, page: 1}}"  v-for="tab in topicTabs" :class="tab.ename === currentTab ? 'active' : ''">{{ tab.name }}</a>
	      </div> 
	      <!-- 分类 -->
	      <!-- 加载中 -->
	      <c-hint v-if="hint.show"></c-hint>
	      <!-- 加载中 -->
	      <!-- 文章列表 -->
	      <c-list :items='topicLists' v-else></c-list>
	      <!-- 文章列表 -->
	    </div>
	  </div>
	  <!-- 侧边栏 -->
	  <div class="sider">
	    <c-siderbar></c-siderbar>
	  </div>
	  <!-- 侧边栏 -->
	</template>


	<script>
	  /* eslint-disable max-len */
	  import cHint from '../components/hint';
	  import cList from '../components/list';
	  import cSiderbar from '../components/siderbar';
	  import { fetchTopicLists, changeUser, fetchUser, checkToken, fetchMsgCount, fetchCollection, showHint, initHint, changeLoginUser } from '../vuex/actions';
	  import { getTopicTabs, getCurrentTab, getTopicLists, getHint, getLoginUser } from '../vuex/getters';
	  export default {
	    components: {
	      cHint,
	      cList,
	      cSiderbar,
	    },
	    vuex: {
	      actions: {
	        fetchTopicLists,
	        fetchUser,
	        changeUser,
	        checkToken,
	        fetchCollection,
	        fetchMsgCount,
	        showHint,
	        initHint,
	        changeLoginUser,
	      },
	      getters: {
	        topicTabs: getTopicTabs,
	        currentTab: getCurrentTab,
	        topicLists: getTopicLists,
	        hint: getHint,
	        loginUser: getLoginUser,
	      },
	    },
	    ready() {
	      if (this.loginUser) {
	        this.changeUser(this.loginUser);
	      }
	    },
	    // 具体看vue-route
	    route: {
	      
	      data({ to: { params: { tab = 'all', page = 1 } } }) {
	        // 初始化hint
	        this.initHint();
	        // 显示hint
	        this.showHint();
	        const topicTab = tab;
	        const currentPage = page;
	        // 获取文章列表
	        this.fetchTopicLists(topicTab, currentPage);
	      },
	    },
	  };
	
	</script>


http://localhost:8080/#!/post/56b70c15c3f170d2629955b5

token 926bae24-1d42-4f79-ada6-87d695abb0d6

感觉vuex难到爆炸。完全愣比


