<template>
  <div class="header-nav">
    <img
      class="logo-style"
      v-if="navName === '/homePage'"
      src="../images/home-logo.png"
      alt="logo"
    />
    <img class="logo-style" v-else src="../images/home-logo2.png" alt="logo" />
    <div class="nav-list">
      <div
        class="nav-item"
        @click="navClick('/homePage')"
        :class="[navName === '/homePage' ? 'bg-f0b' : '']"
      >
        <span
          :class="[navName === '/homePage' ? 'fc-fff' : '']"
          class="nav-text fz-12"
          >网站首页</span
        >
      </div>
      <div
        class="nav-item"
        @click="navClick('/aboutUs')"
        :class="[navName === '/aboutUs' ? 'bg-f0b' : '']"
      >
        <span
          :class="[navName === '/homePage' ? 'fc-fff' : '']"
          class="nav-text fz-12"
          >关于我们</span
        >
      </div>
      <div
        class="nav-item"
        @click="navClick('/contactUs')"
        :class="[navName === '/contactUs' ? 'bg-f0b' : '']"
      >
        <a
          href="#contact-us"
          :class="[navName === '/homePage' ? 'fc-fff' : 'fc-333']"
          class="nav-text fz-12"
          >联系我们</a
        >
      </div>
      <div
        class="nav-item nav-brand mr-l-10"
        :class="[navName === '/brand' ? 'bg-f0b' : '']"
        @mouseover="brandOver"
        @mouseout="brandOut"
        @click="navClick('/brand')"
      >
        <span
          class="nav-text fz-12"
          :class="[navName === '/homePage' ? 'fc-fff' : '']"
          >合作品牌</span
        >
        <img
          class="more-style"
          v-if="navName === '/homePage'"
          src="../images/more.png"
          alt="更多"
        />
        <img class="more-style" v-else src="../images/more2.png" alt="更多" />
        <div
          class="more-nav-brand"
          :class="[brandType ? 'brand-show' : 'brand-none']"
        >
          <div
            v-for="(item, index) in brandList"
            @mouseover="eNavOver(index)"
            @mouseout="eNavOut(index)"
            :key="index"
            class="fz-12 mr-b-10"
            :class="[
              showId === item.id
                ? 'text-color-hover2'
                : navName === '/homePage'
                ? item.color
                : 'fc-000',
            ]"
            v-words="item.name"
            @click="brandHandle(item)"
          ></div>
        </div>
      </div>
      <div
        class="nav-item nav-brand mr-l-10"
        @mouseover="languageType = true"
        @mouseout="languageType = false"
      >
        <span
          class="nav-text fz-12"
          :class="[navName === '/homePage' ? 'fc-fff' : '']"
          >{{ lName }}</span
        >
        <img
          class="more-style"
          v-if="navName === '/homePage'"
          src="../images/more.png"
          alt="更多"
        />
        <img class="more-style" v-else src="../images/more2.png" alt="更多" />
        <div
          class="more-nav-lan"
          :class="[languageType ? 'brand-show' : 'brand-none']"
        >
          <div
            v-for="(item, index) in languageList"
            @mouseover="languageOver(index)"
            @mouseout="languageOut(index)"
            :key="index"
            class="fz-12 mr-b-10"
            :class="[
              showLanId === item.id
                ? 'text-color-hover2'
                : navName === '/homePage'
                ? item.color
                : 'fc-000',
            ]"
            v-words="item.name"
            @click="languageHandle(item)"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      navName: "/homePage",
      brandType: false,
      languageType: false,
      showId: "",
      showLanId: 1,
      lName: "中文",
      brandList: [
        {
          name: "本家窗帘",
          color: "text-color-hover",
          id: 1,
        },
        {
          name: "贝拉防盗门窗",
          color: "text-color-hover",
          id: 2,
        },
        {
          name: "欧瑞安防",
          color: "text-color-hover",
          id: 3,
        },
        {
          name: "方太 抽油烟机",
          color: "text-color-hover",
          id: 4,
        },
        {
          name: "Big Panda地板",
          color: "text-color-hover",
          id: 5,
        },
        {
          name: "EZY Kitchens",
          color: "text-color-hover",
          id: 6,
        },
        {
          name: "Go Tile瓷砖",
          color: "text-color-hover",
          id: 7,
        },
      ],
      languageList: [
        {
          name: "中文",
          color: "text-color-hover",
          id: 1,
        },
        {
          name: "英文",
          color: "text-color-hover",
          id: 2,
        },
      ],
    };
  },
  mounted() {
    setTimeout(() => {
      const path = this.$route.path;
      if (path === "/") {
        this.navName = "/homePage";
      } else {
        this.navName = path;
      }
    }, 100);
  },
  methods: {
    ...mapMutations(["changeLang"]),
    eNavOver(i) {
      this.brandList[i].color = "text-color-hover2";
    },
    eNavOut(i) {
      this.brandList[i].color = "text-color-hover";
    },
    languageOver(i) {
      this.languageList[i].color = "text-color-hover2";
    },
    languageOut(i) {
      this.languageList[i].color = "text-color-hover";
    },
    brandOver() {
      this.brandType = true;
    },
    brandOut() {
      this.brandType = false;
    },
    navClick(path) {
      if (path == "/contactUs") {
        this.navName = "/homePage";
        this.showId = "";
        return this.$router.push("/homePage");
      }
      this.navName = path;
      this.$router.push(path);
      if (this.navName !== "/brand") this.showId = "";
    },
    brandHandle(row) {
      this.showId = row.id;
      if (this.navName !== "/brand") this.navName = "";
    },
    languageHandle(row) {
      if (this.showLanId === row.id) return;
      if (row.id === 1) {
        this.lName = "中文";
        this.$router.push("/homePage");
        this.changeLang("ch");
      } else {
        this.lName = "英文";
        this.$router.push("/EnglishHomePage");
        this.changeLang("en");
      }

      this.showLanId = row.id;
    },
  },
};
</script>
<style scoped>
.header-nav {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1.86rem;
  display: flex;
  justify-content: space-between;
  z-index: 9;
}
.logo-style {
  margin-top: 0.2rem;
  margin-left: 1.6rem;
  width: 1.58rem;
  height: 1.46rem;
}
.nav-list {
  display: flex;
  height: 1.4rem;
}
.nav-item {
  display: flex;
  justify-content: center;
  width: 1.26rem;
  height: 1.4rem;
  cursor: pointer;
}
.nav-text {
  margin-top: 0.87rem;
}
.nav-brand {
  position: relative;
}
.more-nav-brand {
  transition: all 1s;
  padding-left: 0.04rem;
  position: absolute;
  left: 0;
  top: 1.5rem;
  display: flex;
  flex-direction: column;
  width: 2rem;
}
.more-nav-lan {
  transition: all 1s;
  padding-left: 0.26rem;
  position: absolute;
  left: 0;
  top: 1.5rem;
  display: flex;
  flex-direction: column;
  width: 1.26rem;
}
.brand-show {
  opacity: 1;
}
.brand-none {
  opacity: 0;
}
.more-style {
  margin-left: 0.08rem;
  margin-top: 1.02rem;
  width: 0.16rem;
  height: 0.08rem;
}
.text-color-hover {
  color: #ffffff;
}
.text-color-hover2 {
  color: #f0bd52ff;
}
a:active {
  color: #ffffff;
}
</style>