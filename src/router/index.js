import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../pages/Dashboard/Dashboard'
import UserManagement from "../pages/UserManagement/UserManagement"
import PPMP from "../pages/PGSO/PPMP"
import Profile from "../pages/Profile/Profile"
import Home from "../pages/Home/Home"
import NotFound from "../pages/NotFound/NotFound"
import Login from '../pages/Login/Login'
import store from "../store/store"

const routes = [
  {
    path: '/',
    redirect: {
      name: 'Dashboard'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem('token')) {
        next('/login')
      }
      else {
        next()
      }
    },
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Home
      },
      {
        path: '/profile',
        name: 'Profile',
        component: Profile
      },
      {
        path: '/user-management',
        name: 'UserManagement',
        component: UserManagement
      },
      {
        path: '/ppmp',
        name: 'PPMP',
        component: PPMP
      }

    ]
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
