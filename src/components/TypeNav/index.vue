<template>
  <div class="type-nav">
    <div class="container" @mouseleave="isShowSort">
      <h2 class="all" @mouseenter="isShow = true">全部商品分类</h2>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
      <transition name="sort">
        <div class="sort" v-show="isShow">
          <div class="all-sort-list2">
            <div
              class="item bo"
              v-for="(C1, index) in CategoryList"
              :key="C1.categoryId"
              @mouseenter="change(index)"
              :class="{ changeBackgoundColor: curIndex == index }"
            >
              <h3>
                <a href="">{{ C1.categoryName }}</a>
              </h3>
              <div
                class="item-list clearfix"
                :style="{ display: curIndex == index ? 'block' : 'none' }"
              >
                <div class="subitem">
                  <dl
                    class="fore"
                    v-for="C2 in C1.categoryChild"
                    :key="C2.categoryId"
                  >
                    <dt>
                      <a href="">{{ C2.categoryName }}</a>
                    </dt>
                    <dd>
                      <em v-for="C3 in C1.categoryChild" :key="C3.categoryId">
                        <a href="">{{ C3.categoryName }}</a>
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import throttle from "lodash/throttle";
export default {
  name: "TypeNav",
  data() {
    return {
      curIndex: -1,
      isShow: true,
    };
  },
  computed: {
    ...mapState("Home", ["CategoryList"]),
  },
  methods: {
    change: throttle(
      function (index) {
        this.curIndex = index;
      },
      30,
      {
        leading: true,
        trailing: false,
      }
    ),
    isShowSort() {
      this.curIndex = -1;
      if (this.$route.path != "/home") {
        this.isShow = false;
      }
    },
  },
  mounted() {
    this.curIndex = -1;
    if (this.$route.path != "/home") {
      this.isShow = false;
    }
  },
};
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      overflow: hidden;
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          //   &:hover {
          //     .item-list {
          //       display: block;
          //     }
          //   }
        }
        .changeBackgoundColor {
          background: skyblue;
        }
      }
    }
    .sort-enter {
      height: 0px;
    }
    .sort-enter-to {
      height: 461px;
    }
    .sort-enter-active {
      transition: all 0.3s linear;
    }
  }
}
</style>