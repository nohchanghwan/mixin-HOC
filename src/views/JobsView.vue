<template>
  <div>
      <div v-for="job in this.$store.state.jobs" v-bind:key="job">{{ job.title }}</div>
  </div>
</template>

<script>
// import { fetchJobsList } from '../api/index.js'

export default {
//데이터를 직접 불러오지말고 불러오는 모듈을 사용해본다.
//axios는 프로미스 기반 API이므로, then, catch 사용
  // data() {
  //   return {
  //     jobs: []
  //   }
  // },

  created() {
    this.$store.dispatch('FETCH_JOBS');
    // fetchJobsList()
    //   .then(response => this.jobs = response.data)
    //   .catch(error => console.log(error));
  },
}
</script>

<style>

</style>