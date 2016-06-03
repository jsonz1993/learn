import Vue from 'vue'; // 加载vue模块
import App from './App'; // 加载app 主模块
import VueRouter from 'vue-router'; // 加载vue-router 模块
import configRouter from './routers'; // 加载路由器加载控制配置

Vue.use(VueRouter); // 注入vue-router
const router = new VueRouter(); // new 一个实例
configRouter(router); // 配置路由器

router.start(Vue.extend(App), '#app'); // 使用路由器，加载到#app dom上