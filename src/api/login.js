import request from '../utils/request.js';
//登录
export const userLogin = (params) => {
    return request({
        url: '/api/auth/oauth/token',
        method: 'post',
        params,
    });
};