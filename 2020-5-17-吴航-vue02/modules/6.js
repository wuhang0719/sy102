//引入vue
import Vue from 'vue';
//引入样式
import '../scss/06.scss';

//实例化对象
let app = new Vue({
    //绑定视图
    el: '#app',
    data:{
        color: ['black','black','black' ],
        cursor: ['not-allowed','not-allowed','not-allowed']
    },
    //方法
    methods: {
        //图片边框
        imgClick(index){
            let arr = ['black','black','black'];
            arr[index] = 'red';
            this.color = arr;
            if(index == 0){
                this.cursor=['pointer','pointer','pointer'];
            }else if(index == 1){
                this.cursor = ['not-allowed', 'pointer', 'pointer'];
            }else{
                this.cursor = ['not-allowed','not-allowed','not-allowed'];
            }
        },
    }
})