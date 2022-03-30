import requests from "./requests";
import reMock from './mockJs'

// 获取三级列表的数据
export const reqBaseCategoryList = () => requests({method: 'get',url: '/product/getBaseCategoryList'});

// mock模拟轮播图数据
export const reqBannerList = () => reMock({method:'get',url:'/banner'})

// mock模拟轮播图数据
export const reqFloorList = () => reMock({method:'get',url:'/floor'})

// 获取搜索页的数据
export const reqSearchList = (params) => requests({method:'post',url:'/list',data:params})