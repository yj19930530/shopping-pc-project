import axios from 'axios';
import Cookies from 'js-cookie';
// import { Message } from 'element-ui';
// import store from '../store.js';
import { Message } from 'element-ui';

let instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    timeout: 10000
});

instance.interceptors.request.use(config => {
    const questStatus = config.method;
    const access_token = Cookies.get('Access-Token');
    switch (questStatus) {
        case 'post': {
            if (config.params.loginType) {
                config.headers.post["Authorization"] = 'Basic ' + btoa('BasePlatform:123456');
                config.headers.post[
                    "Content-Type"
                ] = "multipart/form-data";
            } else {
                config.headers.post['Authorization'] = 'Bearer ' + access_token;
                config.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
                config.data = config.params;
                delete config.params;
            }
            break;
        }
        case 'get': {
            config.headers.get['Authorization'] = 'Bearer ' + access_token;
            break;
        }
        case 'delete': {
            config.url = `${config.url}/${config.params}`;
            config.headers.delete['Authorization'] = 'Bearer ' + access_token;
            delete config.params;
            break;
        }
        case 'put': {
            config.headers.put['Authorization'] = 'Bearer ' + access_token;
            config.headers.put['Content-Type'] = 'application/json;charset=UTF-8';
            config.data = config.params;
            delete config.params;
            break;
        }
        default: {
            return config;
        }
    }
    return config;
})

instance.interceptors.response.use(response => {
    const res = response.data;
    if (response.status === 200 && res.code === 200) {
        return res;
    } else {
        if (res.code === 401) {
            Message({
                message: res.msg,
                type: 'error',
                duration: 1000
            });
            location.pathname = '/login';
        } else {
            Message({
                message: res.msg,
                type: 'error',
                duration: 1000
            });
        }
    }
}, error => {
    Message({
        message: error.message,
        type: 'error',
        duration: 1000
    });
    return Promise.reject(error);
})

export default instance;