<template>
  <div>
    <TypeNav />
    <!--列表-->
    <ListContainer />
    <!--今日推荐-->
    <TodayRecommend />
    <!-- 商品排行 -->
    <Rank />
    <!-- 猜你喜欢 -->
    <Like />
    <!--楼层-->
    <Floor v-for="item in FloorList" :key="item.id" :item="item"/>
    <!--商标-->
    <Brand />
  </div>
</template>

<script>
import Brand from "./Brand/Brand";
import Floor from "./Floor/Floor";
import Like from "./Like/Like";
import ListContainer from "./ListContainer/ListContainer";
import Rank from "./Rank/Rank";
import TodayRecommend from "./TodayRecommend/TodayRecommend";

import {reqFloorList} from '@/api'
export default {
  name: "Home",
  components: {
    Brand,
    Floor,
    Like,
    ListContainer,
    Rank,
    TodayRecommend,
  },
  data() {
    return {
      FloorList: []
    }
  },
  mounted() {
    reqFloorList().then(({data})=>{
      this.FloorList = data.data
    })
  },
};
</script>

<style lang="less" scoped>
</style>