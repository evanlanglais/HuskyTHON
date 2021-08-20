import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/tabs/home'
    },
    {
        path: '/tabs/',
        component: Tabs,
        children: [
            {
                path: '',
                redirect: '/tabs/home'
            },
            {
                path: 'home',
                component: () => import('@/views/Home.vue')
            },
            {
                path: 'events',
                component: () => import('@/views/Events.vue')
            },
            {
                path: 'fundraising',
                component: () => import('@/views/Fundraising.vue')
            },
            {
                path: 'info',
                component: () => import('@/views/Info.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
