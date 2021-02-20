<template>
    <div id="tab-bar">
      <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "TabBar"
    }
</script>

<style scoped>
  body {
      margin: 0;
      padding: 0;
  }
  #tab-bar{
    display: flex;
    background: #f2f1f2;
    height: 49px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    /*颜色过度*/
    box-shadow: 0 -1px 1px rgba(100,100,100,.1);
  }
</style>
