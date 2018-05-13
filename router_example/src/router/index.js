import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Friends from '@/components/Friends'
import Contact from '@/components/Contact'
import Accounts from '@/components/Accounts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/friends/:id/:age/:type',
      name: 'Friends',
      props:true,
      component: Friends
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/accounts',
      name: 'Accounts',
      component: Accounts
    },
  ]
})
