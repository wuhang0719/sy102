<template>
  <div>
      <h1>this is {{name}}</h1> 
      <demo></demo>
  </div>
</template>

<script>
// 引入组件
import Demo from './Demo'
export default {
    data() {
        return {
            name: 'child'
        }
    },
    // 局部注册组件
    components:{Demo},
}
</script>

<style>

</style>