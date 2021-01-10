import Vue from 'vue'
import VueRouter from 'vue-router'
import NewsView from '../views/NewsView.vue'
import AskView from '../views/AskView.vue'
import JobsView from '../views/JobsView.vue'
import UserView from '../views/UserView.vue'
import ItemView from '../views/ItemView.vue'

Vue.use(VueRouter);

export const router = new VueRouter({
  //라우팅시에 hash값 붙는것을 제거하기위해
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/news',
    },
    {
      // path: url 주소
      path: '/news',
      // 분기처리를 위한 이름추가
      name: "news",
      // components : url 주소로 갔을 때 표시될 컴포넌트
      component: NewsView,
    },
    {
      path: '/ask',
      name: "ask",
      component: AskView,
    },
    {
      path: '/jobs',
      name: "jobs",
      component: JobsView,
    },
    {
      path: '/user/:id',
      component: UserView,
    },
    {
      path: '/item/:id',
      component: ItemView
    }
    ]
});

console.log(router);


