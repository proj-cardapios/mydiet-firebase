import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import home from '../views/Home.vue'
import { auth } from '../plugins/firebase'


Vue.use(VueRouter)

const routes = [
  
  {
      path: '',
      component: () => import('@/layouts/Default'),
      meta: {
        requiresAuth: true
      },
      children:[
  {
    path: '/',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: home
  },
  {
    path: '/Cardapios',
    name: 'Cardapio',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Cardapio1.vue')
  },
], 
  },
  {path: "",
    component:()=> import('@/layouts/Blank'),
  children:[
    {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/cadastrar',
    name: 'Cadastro',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Cadastro.vue')
  },
  ]}, 
  
  

]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)

  if (requiresAuth && !auth.currentUser) {
    next('/login')
  } else {
    next()
  }
})

export default router
