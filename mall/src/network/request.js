import Vue from 'vue'
import axios from 'axios'
Vue.use(axios)
axios.defaults.baseURL = '/api'
axios.defaults.timeout = 8000 //延时一定要做
axios.interceptors.response.use((response) => {
    let res = response.data;
    // 如何判断成功：当状态status==0时
    if (res.status == 0) {
        return res.data
    } else if (res.status == 10) {
        window.location.href = '/#/login' //如果未登录跳转到登录界面
    } else {
        alert(res.msg);
    }
})