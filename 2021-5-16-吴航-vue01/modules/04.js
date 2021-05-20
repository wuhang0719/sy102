//引入vue
import Vue from 'vue';
//构建应用
let app = new Vue({
    //视图
    el: '#app',
    //模型
    data: {
        title: 'hello',
        books: ['这本书能够让你戒烟', '追风筝的人','论语'],
        person: {
            name: '张三',
            sex: '男'
        },
        xxoo: ''
    }
})
// console.log(app);
//修改普通值
// app.title = 'i love you';

// 1、数组中的基础值类型
// 数据丢失
app.books[1] = '道德经';
// 必须更新整个数组
// app.books = ['这本书能够让你戒烟', '道德经','论语'];

// 2、数组中的新增的值
// app.books.push('鬼谷子');  //可以
// app.books[0] = '鬼谷子'; //不可以

// 3、对象新增的属性
// app.person.age = 18;
// app.person.xxoo = 18;

// set设置
// app.$set(app.books,3,'哈哈1');
// app.$set(app.person, 'name', 22);