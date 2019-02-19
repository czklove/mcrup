import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import newlist from '@/components/news'
import bookindex from '@/components/book'
import booklist from '@/components/book/booklist'
Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/home',
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
    },
    {
      path: '/booklist',
      name: 'booklist',
      component: booklist
    }
  ]
})
