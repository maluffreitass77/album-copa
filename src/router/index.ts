import {
  createRouter,
  createWebHistory
} from '@ionic/vue-router'

import { RouteRecordRaw } from 'vue-router'

import TabsPage from '@/views/TabsPage.vue'
import { useAuth } from '@/composables/useAuth'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
{
  path: '/login',
  component: () => import('@/views/LoginPage.vue'),
  meta: { requiresGuest: true }
},
{
  path: '/about',
  component: () => import('@/views/AboutPage.vue'),
  meta: { requiresAuth: true }
},
{
  path: '/register',
  component: () => import('@/views/RegisterPage.vue'),
  meta: { requiresGuest: true }
},
{
  path: '/reset-password',
  component: () => import('@/views/ResetPasswordPage.vue'),
  meta: { requiresGuest: true }
},
{
  path: '/tabs',
  component: TabsPage,
  meta: { requiresAuth: true },
  children: [
    {
      path: '',
      redirect: '/tabs/album'
    },
    {
      path: 'statistics',
      component: () => import('@/views/StatisticsPage.vue')
    },
    {
      path: 'album',
      component: () => import('@/views/AlbumPage.vue')
    },
    {
      path: 'collection',
      component: () => import('@/views/CollectionPage.vue')
    },
    {
      path: 'profile',
      component: () => import('@/views/ProfilePage.vue')
    },
    {
      path: 'about',
      component: () => import('@/views/AboutPage.vue')
    }
  ]
}
]

const router = createRouter({
history: createWebHistory(import.meta.env.BASE_URL),
routes,
scrollBehavior() {
  return { left: 0, top: 0 }
}
})

router.beforeEach((to, _from, next) => {
const { getCurrentUser } = useAuth()
const isLoggedIn = Boolean(getCurrentUser())

if (to.meta.requiresAuth && !isLoggedIn) {
  next('/login')
  return
}

if (to.meta.requiresGuest && isLoggedIn) {
  next('/tabs/album')
  return
}

next()
})

export default router