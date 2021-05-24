// 引入Vue
import Vue from 'vue';
// 引入 axios
import axios from 'axios';
// 引入组件
import child from './child';
// import App from './App';

// 挂载
// Vue.component('demo', Demo);

// 构建应用
const app = new Vue({
    // 视图
    el: '#app',
    // 数据
    data: {
        msg: '1111'
    },
    // 注册组件
    components: {child},
})