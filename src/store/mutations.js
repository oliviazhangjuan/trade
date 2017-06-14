import * as types from './mutations-types'
export default {
  [types.SET_UID] (state, uid) {
    state.uid = uid
  },
  [types.TOGGLE_SIDE_MENU] (state, flag){
    $.cookie('tSideMenu', flag)
    state.toggleSideMenu = flag
  },
  [types.CURRENT_MODAL] (state, str){
    state.currentModal = str
  }
}
