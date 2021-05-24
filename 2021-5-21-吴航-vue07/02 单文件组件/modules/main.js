// 引入vue
import Vue from 'vue';
// 引入App
import App from './App';
// 构建应用
const app = new Vue({
    // 为我们提供了render方法
    //  渲染页面
    render: h => h(App)
// 上树
}).$mount('#app');