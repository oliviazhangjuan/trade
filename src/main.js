import Vue from 'vue';
import VueRouter from 'vue-router';

import {sync} from 'vuex-router-sync'
import routes from './routes'
import store from './store'
import iView from 'iview/dist/iview.min'
import 'iview/dist/styles/iview.css';
import VueBar from 'vuebar';
// import iView from '../static/js/iView/index';
// import '../static/js/iView/styles/index.less';

import App from './components/App.vue'

import VueHighcharts from './assets/libs/VueHighcharts'
Vue.use(VueHighcharts);

// 注册 filter
Vue.use(VueRouter);
Vue.use(iView);
Vue.use(VueBar);
// 路由
const router = new VueRouter({
  routes: routes,
  // mode: 'history', // localhost:8080/Login 方式的路由会和后端路由冲突
  scrollBehavior: function (to, from, savedPosition) {
    return savedPosition || {x: 0, y: 0}
  }
})

// 路由切换之前
router.beforeEach((to, from, next) => {
  document.title = to.name ?  (to.name + ' | Trade') : 'Trade';
  iView.LoadingBar.start();
  if (to.path !== '/LoginRole' && to.path !== '/Register') {
    let uid = $.cookie('UID');
    if (uid) {
      next()
    } else {
      console.info('登录失效')
      next({
        path: '/LoginRole'
      })
    }
  } else {
    next()
  }
})

// 路由切换成功之后
router.afterEach((to, from, next) => {
  iView.LoadingBar.finish();
});

sync(store, router)

new Vue({
  el: '#root',
  router,
  store, // 把 store 对象提供给 "store" 选项, 将 store 的实例注入到所有的子组件中, 子组件中通过 this.$store.XXX 访问
  render: h => h(App)
})
