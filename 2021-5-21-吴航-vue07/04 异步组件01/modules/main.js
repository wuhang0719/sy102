// 引入vue
import Vue from 'vue';
// 引入App
import App from './App';

// 第二种方式
// const Xxoo = () => import('./Xxoo');
// // 全局注册
// Vue.component("Xxoo", Xxoo);

// 简写
// Vue.component('Xxoo', () => import('./Xxoo'));

// 动态
let name = 'Xxoo';
Vue.component('Xxoo', () => import(`./${name}`));


// 构建应用
const app = new Vue({
    render: h => h(App)
    // 上树
}).$mount('#app');