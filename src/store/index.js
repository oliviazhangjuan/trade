import Vue from 'vue'
import Vuex from 'vuex'
import state from './state' // 设置初始state
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

/**
 * 实例化 store, 存储应用中大部分的状态
 * 1. 响应式存储, 若 store 中的状态发生变化, 那么用到该状态的所有组件都会高效更新;
 * 2. 改变 store 中的状态的唯一途径: 显式的 commit 一个 mutations;
 * 3. 每个应用仅包含一个 store 实例;
 */
const debug = process.env.NODE_ENV !== 'production';
export default new Vuex.Store({
  state,
  actions,
  mutations,
  modules: {
  },
  strict: debug,
})
