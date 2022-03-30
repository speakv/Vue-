import { reqSearchList } from "@/api"

const state = {
    SearchList: {}
}
const actions = {
    getSearchList({commit},params={}) {
        reqSearchList(params).then(({data:{data}})=>{
            commit("getSearchList",data)
        })
    }
}
const mutations = {
    getSearchList(state,params){
        state.SearchList = params
    }
}
const getters = {}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}