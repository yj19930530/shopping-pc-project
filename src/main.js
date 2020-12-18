import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store.js';
import './styles/index.scss';
import './styles/reset.css';
import ElementUI from 'element-ui';

Vue.use(ElementUI, {
    size: 'small'
});
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
