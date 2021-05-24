// 引入vue
import Vue from 'vue';
import App from './App';

// 安装自定义插件----vue家族系列 --- 使用use
import bm from './bm';
// 安装
Vue.use(bm, 1,true,[0,1],'wh');
console.log(Vue.bmClassName);
// 构建应用
const app = new Vue({
    render: h => h(App)
}).$mount('#app')
console.log(app);
