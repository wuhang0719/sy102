//引入vue
import Vue from 'vue';

// 2、定义组件类
const sy102 = Vue.extend({
    // 放置的对象和new Vue相同，但是不同点在于 el变为了template和data为函数，数据为函数的返回值
    // 模板
    template:`
        <div>
            <!-- 组件只能有一个跟元素 -->
            <h1>child</h1>
            <h2>{{title}} ---- {{name}}</h2>
        </div>
    `,
    data() {
        return {
            title: '斑码教育',
            name: 'child'
        }
    }
});
//全局注册组件
Vue.component('sy102', sy102);
//实例化对象
let app = new Vue({
    //视图
    el: '#app',
    //模型
    data: {
        msg: '<a>我爱你</a>',
    }
})
console.log(app);
