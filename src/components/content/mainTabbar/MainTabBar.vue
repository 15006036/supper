<template>
    <div id="app">
        <tab-bar>
            <tab-bar-item path="/home" activeColor="blue">
                <template v-slot:icon>
                    <img src="~assets/img/home/home.svg" alt="...." class="tab-bar-img">
                </template>
                <template v-slot:active>
                    <img src="~assets/img/home/home_active.svg" alt="" class="tab-bar-img">
                </template>
                <template v-slot:text>
                    <div class="tab-bar-text">首页</div>
                </template>
            </tab-bar-item>
            <tab-bar-item path="/category" activeColor="blue">
                <template v-slot:icon>
                    <img src="~assets/img/category/category.svg" alt="" class="tab-bar-img">
                </template>
                <template v-slot:active>
                    <img src="~assets/img/category/category_active.svg" alt="" class="tab-bar-img">
                </template>
                <template v-slot:text>
                    <div class="tab-bar-text">分类</div>
                </template>
            </tab-bar-item>
        <tab-bar-item path="/cart" activeColor="blue">
            <template v-slot:icon>
                <img src="~assets/img/shopcart/shopcart.svg" alt="" class="tab-bar-img">
            </template>
            <template v-slot:active>
                <img src="~assets/img/shopcart/shopcart_active.svg" alt="" class="tab-bar-img">
            </template>
            <template v-slot:text>
                <div class="tab-bar-text">购物车</div>
            </template>
        </tab-bar-item>
        <tab-bar-item path="/profile" activeColor="blue">
            <template v-slot:icon>
                <img src="~assets/img/profile/profile.svg" alt="" class="tab-bar-img">
            </template>
            <template v-slot:active>
                <img src="~assets/img/profile/profile_active.svg" alt="" class="tab-bar-img">
            </template>
            <template v-slot:text>
                <div class="tab-bar-text">档案</div>
            </template>
        </tab-bar-item>
      </tab-bar>
    </div>
</template>

<script>
  import TabBar from "../../../components/common/tabbar/TabBar";
  import TabBarItem from "../../../components/common/tabbar/TabBarItem";
  export default {
    name: "MainTabBar",
    data() {
      return {}
    },
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>
    .tab-bar-img{
        margin-top: 3px;
        width: 24px;
        height: 24px;
        /*将图片与文字之间的空格取消*/
        vertical-align: middle;
    }
    .tab-bar-text{
        height: 25px;
        font-size: 14px;
        text-align: center;
    }

</style>
