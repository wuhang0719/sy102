// 引入vue
import Vue from 'vue';
// 组件
export default Vue.extend({
    template: `<h1>child part</h1>`,
    created() {
        console.log(111, this.$http);
        console.log('child', this);
    }
})