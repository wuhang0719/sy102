// 自定义插件
// 引入axios
import axios from 'axios';
export default {
    install(Vue, ...args){
        console.log('插件111',arguments);
        // 添加一个属性
        Vue.bmClassName = 'sy102';
        // 指令
        Vue.directive('bm',function() {
            console.log('this is bm-directive');
        });
        // 过滤器
        Vue.filter('bm', function() {
            return 'BM-sy102' + args[1];
        });
        Vue.prototype.$http = axios;
    }
}