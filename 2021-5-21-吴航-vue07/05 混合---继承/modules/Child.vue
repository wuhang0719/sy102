<template>
  <div>
      <h1>this is {{name}}</h1>
      <demo></demo>
  </div>
</template>

<script>
import Demo from './Demo';
export default {
    data() {
        return {
            name : 'child',
            msg : 'child-msg'
        }
    },
    // 局部注册组件
    components: {
        Demo
    },
    created() {
        console.log('this is child')
    }
}
</script>

<style>

</style>