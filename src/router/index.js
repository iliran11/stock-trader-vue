import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import stocks from '@/pages/stocks'
import portfolio from '@/pages/portfolio'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'app',
      component: home
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: portfolio
    },
    {
      path: '/stocks',
      name: 'stocks',
      component: stocks
    }
  ]
})
