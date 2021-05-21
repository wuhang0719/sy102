// 引入vue
import Vue from 'vue';
// 引入router
import Router from 'vue-router';

// 安装：vue的家族系列都使用use
Vue.use(Router);


// 创建组件
let first = {
    template: `
        <div>
            <h1>first</h1>
            <h2>name:{{$route.fullPath}}</h2>
        </div>
    `,
}
let second = {
    template: `
        <div>
            <h1>second</h1>
            <h2>id:{{id}}</h2>
        </div>
    `,
    props:['id'],
}
let three = {
    template:`
        <div>
            <h1>three</h1>
            <h2>fullPath:{{fullPath}} --- name:{{name}}</h2>
        </div>
    `,
    props: ['fullPath', 'name'],
}

// 创建路由规则
const routes = [
    {path:'/first', component:first, name:'first'},
    {
        path:'/second/:id', component: second, name:'second',
        // 设置props
        props:true,
    },
    {
        path: '/three', component:three, name:'three',
        // props方法，返回值为对象
        props(route){
           let {fullPath, name} = route;
           return {fullPath, name}
        // console.log(arguments);
        }
    }
];
//构建路由对象
let router = new Router({routes});
// 创建vue实例
const app = new Vue({
    // 视图
    el: '#app',
    // 数据
    data: {},
    // 注册路由
    router,
}) 