<template>
  <div>
      <p>name: {{ userInfo.id }}</p>
      <p>karma: {{ userInfo.karma }}</p>
      <p>created: {{ userInfo.created }}</p>

  </div>
</template>

<script>
export default {
  //스타일 가이드상 computed 가 created 보다 먼저나온다
  computed: {
    userInfo(){
      return this.$store.state.user;
    }
  },
  
  created(){
    console.log(this.$route.params.id);
    const userName = this.$route.params.id;
    // axios.get('https://api.hnpwa.com/v0/user/' + userName + '.json')
    this.$store.dispatch('FETCH_USER',userName );
  }
}
</script>

<style>

</style>