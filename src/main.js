import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store.js';
import './styles/index.scss';
import './styles/reset.css';
import ElementUI from 'element-ui';
import demoDirective from './directive/index';// 自定义指令
Vue.use(ElementUI, {
    size: 'small'
});
Vue.use(demoDirective); // 自定义指令
//  使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
    document.title = `${to.meta.name}`;
    next();
});
Vue.config.productionTip = false;
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
