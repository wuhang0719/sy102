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
        return{
            name:'&demo&',
        }
    }
}
</script>
// 只对当前组件内部的元素生效，对于其它组件内部的元素无效。
// 设置scoped可以使用shadowDOM样式。通过属性选择器实现的
// lang可以实现对预编译语言的设置
<style lang="scss" scoped>
/* 样式 */
$color : purple;
    h1 {
        color:$color;
        &:hover{
            color: blue;
        }
    }
</style>