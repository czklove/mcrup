import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import newlist from '@/components/news'
import bookindex from '@/components/book'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/newlist',
      name: 'newlist',
      component: newlist
    },
    {
      path: '/book',
      name: 'book',
      component: bookindex
    }
  ]
})
