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

      // data 每次路由变动都会调用，activate只有创建才会被调用
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

<style lang="less">
  .content {
    float: left;
    width: 70%;
    min-height: 1px
  }

  .sider {
    float: left;
    width: 30%;
    box-sizing: border-box;
    padding-left: 20px;
  }

  @media (max-width: 512px) {
    .content {
      float: none;
      width: 100%;
    }
    .sider {
      float: none;
      width: 100%;
      padding-left: 0;
    }
  }

</style>
