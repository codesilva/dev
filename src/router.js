import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '*',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        title: 'Codesilva - Sobre'
      },
      component: () => import('./views/About.vue')
    },
    {
      path: '/team',
      name: 'team',
      component: () => import('./views/Team.vue')
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      meta: {title: 'CodeSilva - Portfolio'},
      component: () => import('./views/Portfolio.vue')
    },
    {
      path: '/post',
      name: 'blogsingle',
      meta: {title: 'CodeSilva - '},
      component: () => import('./views/BlogSingle.vue')
    },

    {
      path: '/blog',
      name: 'blog',
      meta: {title: 'CodeSilva - Blog'},
      component: () => import('./views/Blog.vue')
    },

    {
      path: '/post/:id',
      name: 'blogsingleid',
      meta: {title: 'CodeSilva - '},
      component: () => import('./views/BlogSingle.vue')
    },
    
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./views/Contact.vue')
    }
  ]
})
