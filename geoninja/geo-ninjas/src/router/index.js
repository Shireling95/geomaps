import Vue from 'vue'
import Router from 'vue-router'
import GMap from '@/components/home/GMap'
import Signup from '@/components/auth/Signup'
import Login from '@/components/auth/Login'
import ViewProfile from '@/components/profile/ViewProfile'
import firebase from 'firebase'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'GMap',
      component: GMap,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup

    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/profile/:id',
      name: 'ViewProfile',
      component: ViewProfile,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  // check to see if the route requires Authorization
  if(to.matched.some(rec => rec.meta.requiresAuth)) {
    // checking Auth state of the user
    let user = firebase.auth().currentUser
    if(user){
      // if the user is signed in then go to the route
      next()
    } else {
      // no user is signed in so they will be redirceted to login
      next({ name: 'Login' })
      }
    } else {
      next()
    }
})

export default router