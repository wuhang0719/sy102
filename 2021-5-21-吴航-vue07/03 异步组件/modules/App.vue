<template>
  <div id="app">
      <h1>app part hello {{msg}}</h1>
      <hr>
      <child></child>
      <hr>
  </div>
</template>

<script>
import Vue from 'vue';
// 1、实现异步加载
Vue.component('child', () => new Promise((resolve, reject) => {
    // 使用settimeout
    setTimeout(() => {
        console.log('settimeout');
        resolve({
            template: '<h1>settimeout-child</h1>'
        })
    }, 4000);
}));
// 暴露默认接口
export default {
    // 数据
    data() {
        return {
            msg: '3333'
        }
    }
}
</script>

<style>

</style>