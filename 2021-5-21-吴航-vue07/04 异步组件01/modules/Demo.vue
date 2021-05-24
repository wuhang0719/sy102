// 模板
<template>
  <div>
      <h1>hello this is {{name}}</h1>
  </div>
</template>
// 脚本
<script>
export default {
    // 定义数据的方式和组件相同
    data() {
        return {
            name: '&demo&',
        }
    }
}
</script>
// 样式
<style lang="scss" scoped>
    $color: purple;
    h1{
        color: $color;
        &:hover {
            color: blue;
        }
    }
</style>