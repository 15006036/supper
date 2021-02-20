<template>
  <div id="nav">
    <router-view></router-view>
    <MainTabBar></MainTabBar>
  </div>
</template>
<script>
  import MainTabBar from "components/content/mainTabbar/MainTabBar";
  export default {
    name: 'App',
    components: {
      MainTabBar
    }
  }
</script>
<style>
body{
  margin: 0;
  padding: 0;
}
</style>
