<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import { isMobile } from "./utils/common";
export default {
  data() {
    return {};
  },
  mounted() {
    if (isMobile()) {
      this.$router.push("mobilePage");
    } else {
      this.$router.push("homePage");
    }
  },
};
</script>
<style>
/*每个页面公共css */
@import "./styles/font.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
}
</style>
