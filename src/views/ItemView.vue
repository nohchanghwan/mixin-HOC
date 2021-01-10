<template>
  <div>
    <section>
      <!-- 질문 상세정보 -->
      <div class="user-container">
        <div>
          <i class="fas fa-user"></i>
        </div>
        <div class="user-discription">
          <router-link :to="'/user/' + itemInfo.user" >
            {{ itemInfo.user }}
          </router-link> 
          <div class="time">
            {{ itemInfo.time_ago }}
          </div>
        </div>
      </div>
      <h2>{{ itemInfo.title }}</h2>
    </section>
    <section>
      <!-- 질문 댓글 -->
      <div v-html="itemInfo.content">
        <!-- 데이터바인딩은 데이터를 그대로 화면에 표현하지만 태그를적용해서 뿌려야할때는ㄴ v-html로 사용 -->
      </div>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    itemInfo(){
        return this.$store.state.item;
    }
  },    
  created(){
    console.log(this.$route.params.id);
    const itemNumber = this.$route.params.id;
    // axios.get('https://api.hnpwa.com/v0/user/' + userName + '.json')
    this.$store.dispatch('FETCH_ITEM',itemNumber );
  }
}
</script>

<style scoped>
.user-container {
  /* 수직으로 떨어지는 div를 수평으로 */
  display: flex;
  align-items: center;
  padding:0.5rem;
}
.fa-user {
  font-size: 2.5rem;
}
.user-discription {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>