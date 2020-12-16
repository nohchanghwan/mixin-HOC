import { fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo } from '../api/index.js'

export default {

    FETCH_NEWS(context) {
        fetchNewsList()
        .then(response => {
            console.log(response.data);
            context.commit('SET_NEWS', response.data);
        })
        .catch(error => {
            console.log(error)
        })
    },
    FETCH_JOBS({ commit }) {
        fetchJobsList()
        .then(({ data }) => {
            // 디스트럭쳐링을 적용해서 
            // response.data 를 -> data로 바로 받아온다
            // 마찬가지로 context 가 commit을 가지고있으니 바로가져온다.
            console.log(data);
            commit('SET_JOBS', data);
        }) 
    },
    FETCH_ASK(context) {
        fetchAskList()
        .then(response => {
            console.log(response.data);
            context.commit('SET_ASK', response.data);
        }) 
    },
    FETCH_USER({ commit }, name){
        fetchUserInfo(name)
        .then(({ data }) => {
            console.log(data);
            commit('SET_USER', data)
        })
    }
}