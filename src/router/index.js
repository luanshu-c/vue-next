import {createRouter, createWebHashHistory} from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('../pages/Home/index.vue')
        },
        {
            path: '/login',
            name: 'Login',
            component: () => import('../pages/Login/index.vue')
        }
    ]
})

export default router;