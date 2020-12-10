import Vue from 'vue'
import Vuex from 'vuex'
import { fetchNewsList } from '../api/index.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
    //컴포넌트레벨이 깊어지거나 관계가 복잡해졌을때(컴포넌트안에 컴포넌트일때 사용)
    state: {
        //속성 선언
        news: []
    },
    mutations: {
        SET_NEWS(state, data){
            state.news = data;
        }
    },
    //Vuex는 비동기호출은 전부 actions 에서 한다.
    actions: {
        FETCH_NEWS(context) {
            fetchNewsList()
            .then(response => {
                console.log(response.data);
                context.commit('SET_NEWS', response.data);
            })
            .catch(error => {
                console.log(error)
            })
        }
    }
})