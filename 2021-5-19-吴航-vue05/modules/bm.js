export default function(store){
    // 插件方法调用
    store.subscribe((...arg) => {
        // 第一个参数为mutation对象, 第二个为state对象
        console.log(arg);
    });
}