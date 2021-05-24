// 引入vue
import Vue from 'vue';
// 引入app
import App from './App';

// 全局混合
Vue.mixin({
    xxoo: 'ooxx',
    say(){
        console.log('i can say');
    },
    data() {
        return{
            num: 11,
            msg: 'mixin'
        }
    },
    // methods: {
    //     demo() {
    //         return 111;
    //     }
    // },
    created() {
        this.num = 14;
        console.log('this is main mixin', this);
    }
})
// 构建应用
const app = new Vue({
    render: h => h(App)
}).$mount('#app');