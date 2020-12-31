<template>
  <div id="app">
    <MbNav v-if="type" />
    <EnNav v-if="!type && langName === 'en'" />
    <Nav v-if="!type && langName === 'ch'" />
    <router-view />
  </div>
</template>
<script>
import { isMobile } from "./utils/common";
import Nav from "./components/nav";
import MbNav from "./components/mobile-nav";
import EnNav from "./components/enNav";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      type: false,
      langName: "",
    };
  },
  components: {
    Nav,
    MbNav,
    EnNav,
  },
  watch: {
    getLangName() {
      this.changeLangeHandle();
    },
  },
  computed: {
    ...mapGetters(["getLangName"]),
    lang() {
      return this.getLangName;
    },
  },
  created() {
    this.langName = this.lang;
  },
  mounted() {
    this.type = isMobile();
    if (isMobile()) {
      this.$router.push("mobileAbout");
    } else {
      if (this.langName === "ch") {
        this.$router.push("homePage");
      } else {
        this.$router.push("EnglishHomePage");
      }
    }
  },
  methods: {
    changeLangeHandle() {
      this.langName = this.getLangName;
    },
  },
};
</script>
<style>
/*每个页面公共css */
@import "./styles/font.css";
#app {
  font-family: Noto Sans SC;
  font-style: normal;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000ff;
}
</style>
