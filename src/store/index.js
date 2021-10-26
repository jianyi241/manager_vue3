import { createStore } from 'vuex'

export default createStore({
  state: {
    userInfo: localStorage.getItem('userInfo')
      ? JSON.parse(localStorage.getItem('userInfo'))
      : '',
    token: localStorage.getItem('token')
  },
  mutations: {
    setUserInfo(state, data) {
      const { userInfo, token } = data
      state.userInfo = userInfo
      state.token = token
      localStorage.setItem('userInfo', JSON.stringify(userInfo))
      localStorage.setItem('token', token)
    },
    clearUserInfo(state) {
      state.userInfo = ''
      state.token = ''
      localStorage.clear()
    }
  },
  actions: {
    SET_USER_INFO({ commit }, data) {
      commit('setUserInfo', data)
    },
    CLEAR_USER_INFO({ commit }) {
      commit('clearUserInfo')
    }
  },
  modules: {}
})
