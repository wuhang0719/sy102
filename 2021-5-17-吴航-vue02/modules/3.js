//引入vue
import Vue from 'vue';
//实例化对象
let app = new Vue({
    el: '#app',
    data: {
        msg: 'hello'
    },
    //定义方法
    methods: {
        //say方法
        say(){
            console.log('this is say');
        },
        demo(){
            console.log('this is demo');
        },
        xxoo(e){
            console.log(e.keyCode);
        }
    }

})