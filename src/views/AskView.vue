<template>
  <div>
      <div v-for="item in this.$store.state.ask" v-bind:key="item">{{ item.title }}</div>
  </div>
</template>

<script>
// import { fetchAskList } from '../api/index.js'

export default {
//데이터를 직접 불러오지말고 불러오는 모듈을 사용해본다.
//axios는 프로미스 기반 API이므로, then, catch 사용
  // data() {
  //   return {
  //     ask: []
  //   }
  // },

  created() {
    this.$store.dispatch('FETCH_ASK');
    // fetchAskList()
    //   .then(response => this.ask = response.data)
    //   .catch(error => console.log(error));
  },
}
</script>

<style>

</style>