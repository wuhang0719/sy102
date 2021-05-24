<template>
  <div id="app">
      <h1>app part hello {{msg}}</h1>
      <hr>
      <child></child>
      <hr>

  </div>
</template>

<script>
// 引入组件
import Child from './Child';
import Demo from './Demo';
// 默认暴露的接口
export default {
    // 数据
    data() {
        return{ }
    },
    created() {
        console.log('this is app-created');
        // console.log(this.xxoo);
    },
    // 注册组件
    components: {
        Demo,Child
    }
}
</script>

<style>

</style>