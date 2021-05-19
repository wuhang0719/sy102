//引入vue
import Vue from 'vue';
// 声明一个组件
const child = Vue.extend({
    // 模板
    template:`
        <div>
            <h1>代表作品：</h1>
            <h2>{{msg}}</h2>
        </div>
    `,
    // 模型
    data(){
        return {
            msg: '速度与激情9'
        }
    },
    // 创建完毕
    created() {
        // 订阅消息
        // this.$on('childDemo', (...args)=> {
        //     console.log(...args);
        // })
        // 发布消息：此处不需要转为驼峰命名法
        // this.$emit('childDemo', 1, 2, 3, 4);
        this.$emit('child-demo', this.msg);
    }
})
//实例化对象
let app = new Vue({
    // 视图
    el: '#app',
    // 数据
    data: {
        msg: "郭达·杰森斯坦森"
    },
    // 注册子组件
    components:{child},
    // 创建方法
    methods:{
        xxoo(msg) {
            console.log('xxoo', arguments);
            this.msg = msg;
        }
    }

})