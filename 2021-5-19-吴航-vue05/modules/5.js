// 引入vue
import Vue from 'vue';
// 引入vuex
import Vuex from 'vuex';
// 引入插件
import logger from 'vuex/dist/logger';
// 引入自定义插件
import bm from './bm';

// 引入安装
Vue.use(Vuex);
// 创建store对象
let store = new Vuex.Store({
    // 配置
    plugins:[logger(), bm],
    // 创建数据
    state: {
        num: 0
    },
    // 计算属性数据
    getters: {
        doubleNum(state){
            return state.num * 2;
        }
    },
    // 同步消息
    mutations:{
        setNum(state, v){
            state.num = v;
        }
    }
});

// 声明子组件
let child = Vue.extend({
    template: '#child',
})
// 构建应用
const app = new Vue({
    store,
    // 视图
    el:'#app',
    // 数据
    data: {

    },
    // 注册组件
    components:{child},
    // 计算属性数据
    computed: {
        num:{
            // 获得
            get() {
                return this.$store.state.num;
            },
            // 修改
            set(v){
                this.$store.commit('setNum', v);
            }
        }
    }
})