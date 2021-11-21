import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue'
import ParticipantDetail from '@/views/ParticipantDetail.vue';
import TeamDetail from '@/views/TeamDetail.vue';
import Settings from '@/views/Settings.vue';

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
                path: 'search',
                component: () => import('@/views/Search.vue')
            },
            {
                path: 'leaderboards',
                component: () => import('@/views/Leaderboards.vue')
            },
            {
                path: 'info',
                component: () => import('@/views/Info.vue')
            }
        ]
    },
    {
        path: '/participant/:id',
        component: ParticipantDetail
    },
    {
        path: '/team/:id',
        component: TeamDetail
    },
    {
        path: '/settings',
        component: Settings
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
