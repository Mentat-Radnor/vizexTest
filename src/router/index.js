import * as VueRouter from 'vue-router'
import MainPage from '@/views/MainPage.vue'

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage,
    props: (route) => ({ page: parseInt(route.query.page) || 1 }),
  },
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
})

export default router
