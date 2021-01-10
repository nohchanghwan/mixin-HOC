<template>
  <div class="user-container">
    <div>
      <i class="fas fa-user"></i>
    </div>
    <div class="user-discription">
      <div>
        {{ info.id }}
      </div>
      <div class="time">
        {{ info.created }}
      </div>
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