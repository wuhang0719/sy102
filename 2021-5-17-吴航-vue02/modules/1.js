//引入vue
import Vue from 'vue';

//实例化对象
let app = new Vue({
    //绑定视图
    el: '#app',
    //数据
    data: {
        msg: 'hello'
    },
    // 定义方法
    methods: {
        say() {
            console.log('this is say');
            // console.log(this);
        },
        demo(){
            console.log('this is demo');
            this.say();
        },
        xxoo(...args){
            console.log(args);
        }
    }
})
console.log(app);