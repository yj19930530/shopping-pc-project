import Vue from 'vue'
import VueRouter from 'vue-router'
import { isMobile } from '../utils/common'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'homePage',
        redirect: isMobile() ? '/mobilePage' : '/homePage',
        meta: {
            name: '首页'
        }
    },
    {
        path: '/homePage',
        name: 'homePage1',
        component: () => import('@/views/page/homePage.vue'),
        meta: {
            name: '首页'
        }
    },
    {
        path: '/mobilePage',
        name: 'mobilePage',
        component: () => import('@/views/page/mobileHomePage.vue'),
        meta: {
            name: '首页'
        }
    },
]

const router = new VueRouter({
    mode: 'history',
    base: '',
    routes
})

export default router
