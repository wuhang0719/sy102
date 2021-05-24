// 引入vue
import Vue from 'vue';
// 引入 axios
import axios from 'axios';
// 引入组件
import child from './child';

// 构建应用
const app = new Vue({
    // 视图
    el: '#app',
    // 数据
    data: {
        msg: ''
    },
    // 注册组件
    components: {child},
    // 创建完成
    created() {
        // 发送ajax请求
    axios
        // 在url添加要传递的query数据
        .get('/data/demo.json?name=zhangsan&age=18', {
            // query数据
            // 通过params传递query数据，此时数据会追加到url上，重名时浏览器端不会覆盖
            // 服务器端获得前端传输过去的数据时后面的覆盖前面的
            params: {
                sex:'nan',
                class:'sy102',
            }
        })
        // .then(res => {
        //     console.log(res.data);
        //     return res.data;
        // }, err => console.log(err))
        // .then(data => {
        //     console.log(data);
        //     this.msg = data.msg;
        // })
        // .catch(err => console.log(111, err));
        // 简写
        .then(({data}) => {
            console.log(data);
            this.msg = data.msg;
        })
        .catch(err => console.log(111, err));
    axios
        .post('/data/demo.json?name=lisi&class=sy103',{xxoo: 123,demo:456},{
            // 设置请求头信息
            headers:{
                'content-type': 'application/x-www-form-urlencoded',
            },
            // query数据 --- 默认的时候追加到url部分
            params:{
                q: 111,
                w: 222
            }
        })
        .then(({data}) => {
            console.log(data);
        })
        .catch(err => console.log('posterr', err))
    }
})
// console.log(app);