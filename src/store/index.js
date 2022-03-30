import Vuex  from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

import Home from './home'
import Search from './search'
const store = new Vuex.Store({
    // 注:开启了命名空间
    modules: {
        Home,
        Search
    }
})

export default store