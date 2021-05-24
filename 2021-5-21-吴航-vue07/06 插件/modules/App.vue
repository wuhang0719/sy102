<template>
  <div id="app">
      <h1 v-bm>app part hello {{msg | bm}}</h1>
  </div>
</template>

<script>
export default {
    data() {
        return{
            msg: 123
        }
    },
    created() {
        console.log(this.$http)
    }
}
</script>

<style>

</style>