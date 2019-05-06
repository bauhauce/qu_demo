import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home/Home'
// import City from './pages/city/City'
// import Detail from './pages/detail/Detail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "city" */ './pages/city/City.vue')
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: () => import(/* webpackChumkName: "detail" */ './pages/detail/Detail.vue')
    }
  ]
})
