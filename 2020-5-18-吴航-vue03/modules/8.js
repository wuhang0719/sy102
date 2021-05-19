//引入vue
import Vue from 'vue';
// 2、定义组件类
const sy102 = Vue.extend({
    //模板
    template: '#tpl',
    data() {
        return {
            title: '斑马教育99',
            name: 'child999'
        }
    },
    //钩子函数-----声明周期
    // 1、创建
    beforeCreate() {
        console.log(1111, 'beforeCreate,组件创建前，事件等都没有被初始化')
    },
    created(){
        console.log(2222, 'created,组件创建后，此时组件已经初始化了数据和事件等');
    },

    beforeMount(){
        console.log(3333, 'beforeMount,组件构建前，此时已经确定了模板和容器元素(未上树)');
    },
    mounted() {
        console.log(4444,'mounted, 组件创建后，此时组件已经上树')
    },
    // 2、存在期
    beforeUpdate() {
        console.log(5555, 'beforeUpdate,组件更新前，此时组件的数据已经更新，但是视图尚未更新');
    },
    updated(){
        console.log(6666, 'updated,组件更新后，此时组件的视图已经更新');
    },
    // 3、销毁期
    beforeDestroy() {
        console.log(7777, 'beforeDestroy,组件销毁前，事件等依然在等待');
    },
    destroyed(){
        console.log(8888, 'destroyed,组件销毁后，此时数据监听器等已经被销毁');
    },
    // 4、缓存期
    activated(){
        console.log(9999, 'activated,组件被激活了，出现了');
    },
    deactivated() {
        console.log('****', 'deactiveated,组件被仅用了');
    }
})
const sy103 = Vue.extend({
    // 模板
    template: `
        <h1>sy103</h1>
    `,
})



//实例化对象
let app = new Vue({
    // 视图
    el: '#app',
    // 数据
    data: {
        msg: '<a>我爱你</a>',
        com: 'sy102'
    },
    // 3、局部注册
    components: {
        sy102,
        sy103
    },
    // 父组件方法
    methods:{
        // 组件切换
        toggle() {
            this.com = this.com == 'sy102' ? 'sy103' : 'sy102';
        }
    }
})