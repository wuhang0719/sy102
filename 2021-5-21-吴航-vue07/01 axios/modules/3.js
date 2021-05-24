// 引入Vue
import Vue from 'vue';
// 引入axios
import axios from 'axios';
// axios的安装
Vue.prototype.$http = axios;
// 构建应用
const app = new Vue({
    // 视图
    el: '#app',
    data: {
        msg: '斑马教育'
    },
    //创建完毕
    created() {
        // 发送ajax请求
        this.$http
            // 传递数据的时候，params是一种追加状态，不是覆盖写
            // 本地不存在的
            .get('/data/sy102')
            // 简写 -- 先解构再使用
            .then((res) => {
                console.log(333, res);
            })
            .catch(err => console.log(111, err));
    } 
})