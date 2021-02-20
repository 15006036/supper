<template>
  <div id="app" class="tab-bar-item" @click="itemClick">
    <slot name="active" v-if="isActive"></slot>
    <slot name="icon" v-else></slot>
    <div :style="activeStyle"><slot name="text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    data() {
      return {
      }
    },
    computed: {
      isActive() {
        // return true
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle() {
        if (this.isActive) {
          return {color: this.activeColor}
        }
        return  {}
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.path)
      }
    }

  }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
  }
  .tab-bar-item >div> img{
    width: 20px;
    height: 10px;
  }
</style>
