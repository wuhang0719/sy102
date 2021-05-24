// 引入Vue
import Vue from 'vue';
// 引入axios
import axios from 'axios';
// 引入组件
import child from './child';

// 安装axios -- 非Vue家族插件，安装方式，将其设置到Vue.prototype上
// Vue.prototype.axios = axios;
// 语义化
Vue.prototype.$http = axios;


// 构建应用
let app = new Vue({
    // 视图
    el: '#app',
    data: {
        msg: ''
    },
    // 注册组件
    components: {child},
    // 创建完毕
    created() {
        console.log('app', this);
        // 发送ajax请求
        // this.axios
        this.$http
            // 传递数据的时候：params是一种追加状态，不是覆盖写
            .get('/data/demo.json?name=zhangsan&sex=nan')
            // 简写
            .then(({data}) => {this.msg = data.msg;})
            .catch(err => console.log(111, err));
    }
})