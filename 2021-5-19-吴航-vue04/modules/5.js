// 引入vue
import Vue from 'vue';

// 声明一个组件
const child = Vue.extend({
    // 接收数据
    props:['demo'],
    // 模板
    template:'#child',
    // 模型
    data() {
        return {
            msg: 'child1 component'
        }
    },
    // 创建完毕
    created(){
        // 调用父组件的方法
        this.demo(this.msg);
    },
    // 检测数据变化
    watch:{
        msg(){
            // 调用父组件的方法
            this.demo(this.msg);
        }
    }
});
// 声明一个组件
const other = Vue.extend({
    props: ['msg'],
    // 模板
    template:'#other',
    updated() {
        console.log(this.msg);
    }
})
// 构建应用
const app = new Vue({
    // 视图
    el: '#app',
    // 数据
    data:{
        msg: 'hello'
    },
    // 注册
    components:{
        child,
        other
    },
    // 方法
    methods:{
        xxoo(msg){
            console.log(arguments);
            // 改变父组件的消息内容
            this.msg = msg;
        },
    }
})