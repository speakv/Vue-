import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import TypeNav from '@/components/TypeNav'
import '@/mock/mockServe'
import 'swiper/css/swiper.css'
import Carsouel from '@/components/Carsouel'

// 注册全局组件TypeNav
Vue.component('TypeNav',TypeNav)
// 注册Carsouel组件
Vue.component('Carsouel', Carsouel)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
