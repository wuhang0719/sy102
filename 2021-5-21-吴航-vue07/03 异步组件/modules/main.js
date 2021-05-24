// 引入vue
import Vue from 'vue';
// 引入App
import App from './App';
// 构建应用
const app = new Vue({
    render: h => h(App)
    // 上树
}).$mount('#app');