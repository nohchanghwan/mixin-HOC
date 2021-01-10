import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations.js'
import actions from './actions.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
    // Vuex->Store는 컴포넌트레벨이 깊어지거나 관계가 복잡해졌을때(컴포넌트안에 컴포넌트일때 사용)
    state: {
        //속성 선언
        news: [],
        jobs: [],
        ask: [],
        user: {},
        item: {}
    },
    // mutations 모듈화 -> mutations.js
    mutations,

    // mutations 모듈화 -> mutations.js
    //Vuex는 비동기호출은 전부 actions 에서 한다.
    actions 
})