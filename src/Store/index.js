import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    searchkey: '',
    issearch: false
  },
  getters: {
    searchkey (state) {
      return state.searchkey
    }
  },
  mutations: {
    newkey (state, value) {
      state.searchkey = value
    }
  }
})
