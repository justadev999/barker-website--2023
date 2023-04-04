import { createRouter, createWebHistory } from 'vue-router'

export const routes = [
    {
        name: 'Home',
        path: '/',
        component: () => import('./pages/Home.vue')
    },
    {
        name: 'Dapp',
        path: '/dapp',
        component: () => import('./pages/Dapp.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router