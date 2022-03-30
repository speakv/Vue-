import { reqBaseCategoryList } from '@/api'
const state = {
    CategoryList: []
}
const actions = {
    getBaseCategoryList({ commit }) {
        reqBaseCategoryList().then(({ data }) => {
            if (data.code == 200) {
                commit('GETBASECATEGORYLIST', data.data)
            }
        })
    }
}
const mutations = {
    GETBASECATEGORYLIST(state, data) {
        state.CategoryList = data.slice(0,data.length-2)
    }
}
const gatters = {}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    gatters
}