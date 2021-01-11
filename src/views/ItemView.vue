<template>
  <div>
    <section>
			<user-profile :info="itemInfo">
				<!-- <div slot="username"> {{ itemInfo.user }}</div> -->
				<router-link slot="username" :to="'/user/' + itemInfo.user" >
				{{ itemInfo.user }}
				</router-link> 
				<template slot="time"> {{ 'Posted ' + itemInfo.time_ago }}</template>
			</user-profile>
    </section>
		<section>
      <h2>{{ itemInfo.title }}</h2>
		</section>
    <section>
      <!-- 질문 댓글 -->
			<!-- 데이터바인딩은 데이터를 그대로 화면에 표현하지만 태그를적용해서 뿌려야할때는ㄴ v-html로 사용 -->
      <div v-html="itemInfo.content">
      </div>
    </section>
  </div>
</template>

<script>
import UserProfile from "../components/UserProfile.vue";

export default {
	components: { 
		UserProfile 
	},
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