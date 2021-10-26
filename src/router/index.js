import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/login'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/css',
    name: 'Css',
    component: () => import('../views/css/css'),
    meta: {
      title: '样式'
    },
    children: [
      {
        path: '/css/flex',
        name: 'Flex',
        component: () => import('../views/css/flex/flex')
      },
      {
        path: '/css/animate',
        name: 'Animate',
        component: () => import('../views/css/animate/animate')
      },
      {
        path: '/css/loop',
        name: 'Loop',
        component: () => import('../views/css/loop/loop')
      }
    ]
  },
  {
    path: '/charts',
    name: 'Charts',
    component: () => import('../views/charts/charts'),
    meta: {
      title: '图标'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: {
      title: '关于'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  console.log('router to ---> ', to)
  document.title = to.meta.title
  next()
})

export default router
