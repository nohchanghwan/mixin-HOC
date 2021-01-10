<template>
  <div>
      <!-- <div v-for="item in this.$store.state.ask" v-bind:key="item">{{ item.title }}</div> -->
      <!-- <div v-for="item in mappingAsk" v-bind:key="item">{{ item.title }}</div> -->
    <ul class="news-list">
      <li v-for="item in mappingAsk" v-bind:key="item" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ item.points }}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
          <p class="news-title">
            <router-link v-bind:to="'/item/' + item.id" >{{ item.title }}</router-link>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by 
            <router-link v-bind:to="'/user/' + item.user" class="link-text">{{ item.user }}</router-link>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
// import { fetchAskList } from '../api/index.js'

export default {
//데이터를 직접 불러오지말고 불러오는 모듈을 사용해본다.
//axios는 프로미스 기반 API이므로, then, catch 사용
  // data() {
  //   return {
  //     ask: []
  //   }
  // },
  computed: {
    // 기존 this.$store.state.ask 를 간단하게 만들고싶으면 mapState로 스테이트를 불러오기
    ...mapState({
      mappingAsk: state => state.ask 
    })

    // 이렇게 스토어의 state를 컴포넌트에서 접근하는 방법이 여러가지가 있는데
    // 1. 템플릿에 `this.$store.state.user`속성 바인딩
    // 2. computed 속성에 `this.$store.state.user`
    // 3. computed 속성에 mapState
    // 4. computed 속성에 mapGetters
    // 모두 유효한 방법이며, 개인의 성향에 따라 편한방법으로 하면됨
  },
  created() {
    this.$store.dispatch('FETCH_ASK');
    // fetchAskList()
    //   .then(response => this.ask = response.data)
    //   .catch(error => console.log(error));
  }
}
</script>

<style>
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