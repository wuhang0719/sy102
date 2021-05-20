// 引入vue
import Vue from 'vue';

// 声明一个组件
const child = Vue.extend({
    props:['demo'],
    // 模板
    template:`
        <div>
            <h1>child part</h1>
            <h2>子组件：{{msg}}</h2>
        </div>
    `,
    // 数据模型
    data() {
        return {
            msg: '数据'
        }
    },
    // 子组件创建完成
    created(){
        console.log(this);
        this.demo(this.msg);
    }
});

// 构建应用
let app = new Vue({
    // 视图
    el:'#app',
    // 数据
    data: {
        msg: 'hello word'
    },
    // 组件注册
    components:{
        child
    },
    // 方法
    methods: {
        xxoo(msg){
            console.log('xxoo', arguments);
            this.msg = msg;
        }
    }
})