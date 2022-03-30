// 引入axios进行二次封装
import axios from 'axios'
// 引入进度条
import NProgress from "nprogress";
import 'nprogress/nprogress.css'

const requests = axios.create({
    baseURL: '/api',
    timeout: 5000
})

requests.interceptors.request.use(function (config) {
  // 进度条开始
    NProgress.start();
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

requests.interceptors.response.use(function (response) {
    // 进度条结束
    NProgress.done();
    return response;
  }, function (error) {
    
    return Promise.reject(error);
  });

  export default requests