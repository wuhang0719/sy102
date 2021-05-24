// 模板
<template>
  <div>this is demo data: {{name}} --- {{sex}}</div>
</template>
// 脚本
<script>
import Sy102 from './Sy102';
export default {
    // 局部的混合(复制)
    mixins:[Sy102, {
        data() {
            return {
                sex: '男'
            }
        }
    }],
    data() {
        return {
            
        }
    },
    created() {
        console.log('this is demo-created');
    }
}
</script>

<style>

</style>