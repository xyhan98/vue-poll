import { createRouter, createWebHistory } from 'vue-router'
import PollList from '@/views/PollList.vue'
import AddPoll from '@/views/AddPoll.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/polls',
      name: 'polls',
      component: PollList,
    },
    {
      path: '/newPoll',
      name: 'newPoll',
      component: AddPoll,
    },
    {
      path: '/',
      redirect: '/polls',
    },
  ],
})

export default router
