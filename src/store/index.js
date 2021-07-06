import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        history: [],
    },
    getters: {
        history: state => state.history,
    },
    mutations: {
        setItem(state, item) {
            state.history.includes(item) ? '' : state.history.push(item)
        }
    },
    actions: {
        setHistoryItem({ commit}, item) {
            commit('setItem', item)
        }
    },
})