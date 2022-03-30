<template>
  <div id="app">
    <my-header></my-header>
    <router-view></router-view>
    <my-footer v-show='$route.meta.isFooter'></my-footer>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader'
import MyFooter from './components/MyFooter'

export default {
  name: 'App',
  components: {
    MyHeader,
    MyFooter
  },
  mounted() {
    // 通知Vuex发送请求,获取数据,存贮于仓库中
    this.$store.dispatch('Home/getBaseCategoryList')
  },

}
</script>

<style lang="less" scoped>

</style>
