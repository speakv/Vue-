import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)

// 重写push与replace
let VuePush = VueRouter.prototype.push
let VueReplace = VueRouter.prototype.replace

VueRouter.prototype.push = function(location,resolve,reject){
    if(resolve && reject) {
        VuePush.call(this,location,resolve,reject)
    }else{
        VuePush.call(this,location,()=>{},()=>{})
    }
}
VueRouter.prototype.replace = function(location,resolve,reject){
    if(resolve && reject) {
        VueReplace.call(this,location,resolve,reject)
    }else{
        VueReplace.call(this,location,()=>{},()=>{})
    }
}



import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'

const router = new VueRouter({
    mode: 'history',
    routes:[
        {
            path: '*',
            redirect: '/home'
        },
        {
            name: 'home',
            path:"/home",
            component: Home,
            meta:{isFooter:true}
        },
        {
            name: 'login',
            path: '/login',
            component: Login,
            meta:{isFooter:false}
        },
        {   name: 'register',
            path: '/register',
            component: Register,
            meta:{isFooter:false}
        },
        {
            name: 'search',
            path: '/search/:params?',
            component: Search,
            meta:{isFooter:true}
        }
    ]
})

export default router