<template>
    <div id="app">
        <nav-bar class="home-nav">
          <template v-slot:center>
            <span>购物街</span>
          </template>
        </nav-bar>
    </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  export default {
    name: "Home",
    data() {
      return {}
    },
    components: {
      NavBar
    }
  }
</script>

<style scoped>
  .home-nav{
    background: #ff8198;;
  }
</style>
