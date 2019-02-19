import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    searchkey: ''
  },
  mutations: {
    increment (state) {
      this.searchkey = state
    }
  }
})
