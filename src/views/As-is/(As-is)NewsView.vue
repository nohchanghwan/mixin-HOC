<template>
  <div>
    <ul class="news-list">
      <li v-for="item in this.$store.state.news" v-bind:key="item" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ item.points }}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
          <p class="news-title">
            <a v-bind:href="item.url">
              {{ item.title }}
            </a>
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
// import { fetchNewsList } from '../api/index.js'

export default {
//데이터를 직접 불러오지말고 불러오는 모듈을 사용해본다.
//axios는 프로미스 기반 API이므로, then, catch 사용
  // data() {
  //   return {
  //     users: []
  //   }
  // },

// created, beforeMount, mounted 등 다양한 라이프사이클 훅이 있는데,
// 보통 데이터요청할때에는 created라는 '라이프사이클 훅'을 사용
created() {
  // console.log('호출 전: ',this);
  this.$store.dispatch('FETCH_NEWS');
    // [AS-IS]
    // 기본적으로 자바스크립트에서의 this 는 함수실행시 전역객체를 가리킴
    // 비동기호출할때에는 현재시점에서 새로 바깥 this가 생기기때문에
    // 위에서 this 변수를 생성하고, 계속 바인딩해줘야 함
    // var vm = this;
    // fetchNewsList()
    //   .then(function(response) {
    //     console.log(response);
          //이안에서 바로 this를 선언하면 undefined 됨    
    //     vm.users = response.data;
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });

    // [TO-BE(ES6문법)]
    // 화살표함수(arrow function)에서는 상위환경의 this를 계승받음  
    // fetchNewsList()
    //   .then(response => {
    //     console.log('호출 후: ', this);
    //     this.users = response.data;
    //     })
    //   .catch(error => console.log(error));
  },
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