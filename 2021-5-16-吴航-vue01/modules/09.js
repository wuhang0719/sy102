//引入vue
import Vue from 'vue';

//全局过滤器，添加自定义的值过滤器
Vue.filter('toUpper', (str) => {
    str = String(str);
    //必须有一个返回值
    return str.toUpperCase();
})

//构建应用
let app = new Vue({
    //视图
    el: '#app',
    //数据
    data:{
        title: 'hello word',
        msg: '你好'
    }
})
console.log(app);