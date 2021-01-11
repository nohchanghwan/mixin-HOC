<template>
  <div class="user-container">
    <div>
      <i class="fas fa-user"></i>
    </div>
    <div class="user-discription">
      <!-- slot을 이용한 프로필분기 : 상위 컴포넌트에서 작성
      ItemView -> info.user 였고
      UserView -> info.id 여서 각각 다르기 때문에 슬롯사용 -->
      <slot name="username"></slot>
      <div class="time">
        <slot name="time"></slot>
      </div>
      <slot name="karma"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: Object
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