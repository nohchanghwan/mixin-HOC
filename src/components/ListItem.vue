<template>
  <div>
    <ul class="news-list">
      <!-- key값을 똑같이 item이라고 해도되지만 warning 발생하므로 다른 idx로 작성 -->
      <li v-for="(item,idx) in listItems" :key="idx" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ item.points || 0 }}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
          <!-- 타이틀 영역 -->
          <p class="news-title">
            <template v-if="item.domain">
              <a v-bind:href="item.url">
                {{ item.title }}
              </a>
            </template>
            <template v-else>
              <router-link v-bind:to="'/item/' + item.id" >
                {{ item.title }}
              </router-link>   
            </template>
          </p>
          <!-- 세부 정보 영역 -->
          <small class="link-text">
            {{ item.time_ago }} by
            <router-link v-if="item.user" v-bind:to="'/user/' + item.user" class="link-text">
              {{ item.user }}
            </router-link>
            <a v-else :href="item.url">
              {{ item.domain }}
            </a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
    //분기처리진행
    // const name = this.$route.name;
    // if(name === 'news') {
    //   this.$store.dispatch('FETCH_NEWS');
    // } else if (name === 'ask'){
    //   this.$store.dispatch('FETCH_ASK');
    // } else if (name === 'jobs'){
    //   this.$store.dispatch('FETCH_JOBS');
    // } else {
    //   return console.log("분기처리안됨")
    // }
  },
  computed: {
    listItems() {
      const name = this.$route.name;
      if(name === 'news') {
        return this.$store.state.news;
      } else if (name === 'ask'){
        return this.$store.state.ask;
      } else if (name === 'jobs'){
        return this.$store.state.jobs;
      } else {
        return console.log("분기처리안됨")
      }
    }
  }
}
</script>

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style:none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width:80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.news-title {
  margin: 0;
}
.link-text {
 color: #828282;
}
</style>