// 引入vue
import Vue from 'vue';

// 2、定义组件类
const sy102 = Vue.extend({
    //模板
    template: '#tpl',
    data() {
        return {
            title: '斑马教育',
            name: 'child9999'
        }
    }
});
const sy103 = Vue.extend({
    // 模板
    template: `
        <h1>sy103</h1>
    `,
})
let app = new Vue({
    // 视图
    el: '#app',
    // 数据
    data: {
        msg: '<a>我爱你</a>',
        com: 'sy102'
    },
    // 局部注册组件
    components: {
        sy102,
        sy103
    },
    // 方法
    methods: {
        // 组件的切换
        toggle(){
            this.com = this.com == 'sy102' ? 'sy103' : 'sy102';
        }
    }
})