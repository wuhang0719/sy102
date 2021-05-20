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
    // 同步消息
    mutations:{
        // 参数为数据对象
        // +3
        addNum(state){
            // console.log('addNum',arguments);
            state.num += 3;
        },
        // -5
        reduceNum(state){
            // console.log('addNum',arguments);
            state.num -= 5;
        },
        // 重置方法
        resetNum(state){
            state.num = 0;
        }
    },
    // 异步消息
    actions: {
        resetNum(){
            console.log('actions', arguments);
            setTimeout(() => {
                store.commit('resetNum');
            }, 2000)
            // store.commit('resetNum');
        }
    },
});

// 声明两个组件
const child = Vue.extend({
    // 模板
    template:'#child',
    // 创建完毕
    created(){
        console.log('child', this);
    }
})
const other = Vue.extend({
    // 模板
    template:'#other',
    // 创建完毕
    created(){
        console.log('other', this);
    }
})
// 构建应用
let app = new Vue({
    // 3、注册store对象
    store,
    // 视图
    el:'#app',
    // 数据
    data: {
        num: 1
    },
    // 注册组件
    components: {child,other},
    // 创建完毕
    created(){
        console.log('app', this);
    },
    // 方法
    methods:{
        addNum(){
            this.$store.commit('addNum', 1, 2, true);
        },
        
    }
})