import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
const state = {
    count: 0,
    timer: null
}
const mutations = {
    //增加的mutation
    increment(state) {
        state.count++
    },
    //减少的mutation
    decrement(state) {
        state.count--
    }
}
const actions = {
    increment({ commit }) {
        //提交mutation
        commit('increment')
    },
    decrement({ commit }) {
        commit('decrement')
    },
    incrementEven({ commit, state }) {
        state.count % 2 == 0 ? commit('increment') : state.count;
    },
    incrementAsync({ commit, state }) {
        if (state.timer == null) {
            state.timer = setInterval(() => {
                commit('increment')
            }, 1000);
        }
    }
}
const getters = {
    countType(state) {
        return state.count % 2 ? "奇数" : "偶数";
    }
}
export default new Vuex.Store({
    state,  //状态对象
    mutations,  //包含多个更新state函数的对象
    actions,    //包含多个对应事件回调函数的对象
    getters     //包含多个getter计算属性函数的对象

})