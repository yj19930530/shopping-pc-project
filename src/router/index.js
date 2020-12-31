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
        path: '/aboutUs',
        name: 'aboutUs',
        component: () => import('@/views/page/aboutUs.vue'),
        meta: {
            name: '关于我们'
        }
    },
    {
        path: '/brand',
        name: 'brand',
        component: () => import('@/views/page/brand.vue'),
        meta: {
            name: '合作品牌'
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
    {
        path: '/mobileAbout',
        name: 'mobileAbout',
        component: () => import('@/views/page/mobileAbout.vue'),
        meta: {
            name: '关于我们'
        }
    },
    {
        path: '/mobileBrand',
        name: 'mobileBrand',
        component: () => import('@/views/page/mobileBrand.vue'),
        meta: {
            name: '产品品牌'
        }
    },
    {
        path: '/mobileContactUs',
        name: 'mobileContactUs',
        component: () => import('@/views/page/mobileContactUs.vue'),
        meta: {
            name: '联系我们'
        }
    },
    {
        path: '/EnglishHomePage',
        name: 'EnglishHomePage',
        component: () => import('@/views/EnglishPage/homePage.vue'),
        meta: {
            name: 'HOME'
        }
    },
    {
        path: '/EnglishAboutUs',
        name: 'EnglishAboutUs',
        component: () => import('@/views/EnglishPage/aboutUs.vue'),
        meta: {
            name: 'HOME'
        }
    },
    {
        path: '/EnglishBrand',
        name: 'EnglishBrand',
        component: () => import('@/views/EnglishPage/brand.vue'),
        meta: {
            name: 'HOME'
        }
    },
]

const router = new VueRouter({
    mode: 'history',
    base: '',
    routes
})

export default router
