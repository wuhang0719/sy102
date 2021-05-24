<template>
  <div id="app">
      <h1>app part hello {{msg}}</h1>
      <hr>
      <child></child>
      <hr>
  </div>
</template>

<script>
// 引入
import Child from "./Child";
// 暴露默认
export default {
    data() {
      return {
          msg: '2222'
      }
  },
  components: { Child },
};
</script>

<style>
</style>