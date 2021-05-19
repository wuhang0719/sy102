//引入vue
import Vue from 'vue';

// 2、定义组件类
const child = Vue.extend({
    // 接收消息
    // 1、数据类型为数组，数组里面为接收的属性名称，名称使用驼峰命名法
    // 模板
    template: `
        <div>
            <input type="text" v-model="msg">
            <h1>子组件</h1>
            <h2>{{msg}}</h2>
        </div>
    `,
    data() {
        return {
            msg: 'child msg'
        }
    },
    //创建完毕
    created() {
        // 触发父组件的自定义事件

    }
});

// 实例化对象
let app = new Vue({
    // 视图
    el: '#app',
    // 模型
    data:{
        msg:''
    },
    // 3、局部注册组件
    components:{
        child,
    },
    created(){
        console.log(this);
        // 添加自定义事件
        this.$on('sy102', (msg,...args) => {
            this.msg = msg;
        })
    },
    // methods
    methods: {
        demo(){
            console.log(22222);
            console.log(arguments);
        }
    }
})
console.log(app);