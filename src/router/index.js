import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/login/Login'
import Home from '@/layout/Home'
import Common from '@/views/Common'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Home',
      name:'Home',
      component:Home
    },
    {
      path:'/Common',
      name:'Common',
      component:Common
    }
  ]
})
