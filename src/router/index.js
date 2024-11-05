import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/pages/Landing.vue')
        },
        {
            path: '/games',
            name: 'games',
            component: () => import('@/views/pages/Games.vue')
        }
    ]
});

export default router;
