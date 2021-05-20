// 引入vue
import Vue from 'vue';
// 引入vuex
import Vuex from 'vuex';

// 1、引入安装
Vue.use(Vuex);

// 2、创建store对象
let store = new Vuex.Store({
    // 创建数据
    state: {
        msg: 'this is store',
        num: 0
    },
    // 计算属性数据
    getters: {
        doubleNum(state) {
            console.log(1111);
            // return 999;
            return state.num * 2;
        }
    },
    // 同步消息
    mutations: {
        // +3
        addNum(state){
            state.num += 3;
            // console.log(arguments);
        },
        // -5 
        reduceNum(state){
            state.num -= 5;
            // console.log(arguments);
        }
    },
    // 异步消息
    actions: {
        resetNum(store) {
            console.log('action', arguments);
            setTimeout(() => {
                store.commit('resetNum');
            }, 2000)
        }
    }
});
// 声明两个子组件
let child = Vue.extend({
    template: '#child',
    // 创建完毕
    created() {
        console.log('child',arguments);
    }
})
let other = Vue.extend({
    template: '#other',
    // 创建完毕
    created() {
        console.log('child',arguments);
    }
})

// 构建应用
const app = new Vue({
    // 3、注册store对象
    store,
    // 视图
    el: '#app',
    // 数据
    data: {
        num:1
    },
    // 注册组件
    components: {
        child,other
    },
    // 方法
    methods: {
        addNum() {
            this.$store.commit('addNum',[1,2,true]);
        }
    }

})
console.log(app);