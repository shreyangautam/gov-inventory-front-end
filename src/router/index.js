import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../pages/Dashboard/Dashboard'
import Login from '../pages/Login/Login'
import store from "../store/store"

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    meta: {requiresAuth: true}
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes

})

router.beforeEach((to, from, next) => {
   if(to.matched.some(record => record.meta.requiresAuth)){
     if(!store.state.userData){
       next({ name: 'Login'})
     }
     else{
       next()
     }
   }
   else{
     next()
   }
})

export default router
