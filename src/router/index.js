import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../pages/Dashboard/Dashboard'
import UserManagement from "../pages/UserManagement/UserManagement"
import NotFound from "../pages/NotFound/NotFound"
import Login from '../pages/Login/Login'
import store from "../store/store"

import auth from './middlewares/auth'
import middlewarePipeline from './middlewarePipeline'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      middleware: [
          auth
      ]
    },    
    children: [{
      path: '/user-management',
      name: 'dashboard.usermgt',
      component: UserManagement,
      meta: {
        middleware: [
            auth
        ]
      }

     
  }],

  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: NotFound
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
  if (!to.meta.middleware) {
      return next()
  }
  const middleware = to.meta.middleware

  const context = {
      to,
      from,
      next,
      store
  }


  return middleware[0]({
      ...context,
      next: middlewarePipeline(context, middleware, 1)
  })

})



// router.beforeEach((to, from, next) => {
//    if(to.matched.some(record => record.meta.requiresAuth)){
//      if(store.state.token === null){
//        next({ name: 'Login'})
//      }
//      else{
//        next()
//      }
//    }
//    else{
//      next()
//    }
// })

export default router
