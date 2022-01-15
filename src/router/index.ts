import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/TabsPage.vue'

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
                component: () => import('@/views/HomePage.vue')
            },
            {
                path: 'events',
                component: () => import('@/views/EventsPage.vue')
            },
            {
                path: 'search',
                component: () => import('@/views/SearchPage.vue')
            },
            {
                path: 'leaderboards',
                component: () => import('@/views/LeaderboardsPage.vue')
            },
            {
                path: 'info',
                component: () => import('@/views/InfoPage.vue')
            }
        ]
    },
    {
        path: '/participant/:id',
        component: () => import('@/views/ParticipantDetailPage.vue')
    },
    {
        path: '/team/:id',
        component: () => import('@/views/TeamDetailPage.vue')
    },
    {
        path: '/settings',
        component: () => import('@/views/SettingsPage.vue'),
    },
    {
        path: '/settings/quick-access-profile',
        component: () => import('@/views/QuickAccessProfilePage.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
