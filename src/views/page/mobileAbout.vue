<template>
  <div class="mobile-about-container">
    <!-- 头部banner -->
    <div class="mobile-about-header">
      <img
        class="header-banner"
        src="../../images/mobile/about-bannner.png"
        alt=""
      />
      <div class="header-info-box fl-cen">
        <div class="header-info-center">
          <div class="ff-sjt fz-27 fc-fff mr-l-20 mr-t-50">
            为懂享受生活的你
          </div>
          <div class="ff-sjt fz-27 fc-fff mr-l-20 mr-t-10">量身定制</div>
          <div class="fz-12 fc-fff mr-t-30 mr-l-20">
            精品布料 专利轨道 千种选择 免费测量
          </div>
          <div class="fz-12 fc-fff mr-t-20 mr-l-20">免费报价 免费安装</div>
          <div class="fz-12 fc-fff mr-t-20 mr-l-20">
            主营产品：窗帘、窗纱、卷帘、百叶窗
          </div>
        </div>
      </div>
    </div>
    <!-- 关于我们text -->
    <div class="mobile-about-us fl-cenc">
      <div class="fz-30 fw-bold">关于我们</div>
      <div class="mobile-heng mr-t-30"></div>
      <div class="fz-12 mr-t-50">
        位于布里斯班桑尼班克的Bens Curtains陈列室展示了南
      </div>
      <div class="fz-12 mr-t-20">
        郊最大范围的窗帘，卷帘和百叶窗。我们专注于窗帘，
      </div>
      <div class="fz-12 mr-t-20 mr-b-50">
        卷帘和百叶窗，以适应各种口味，风格和预算。
      </div>
      <img
        class="about-img"
        v-for="item in 4"
        :key="item"
        src="../../images/pc/home-banner2.png"
        alt=""
      />
    </div>
    <MbFooter />
  </div>
</template>

<script>
import MbFooter from "../../components/mobile-footer";
export default {
  data() {
    return {};
  },
  components: {
    MbFooter,
  },
};
</script>

<style scoped>
.mobile-about-header {
  position: relative;
  width: 100%;
  height: 4.76rem;
}
.header-banner {
  width: 100%;
  height: 100%;
}
.header-info-box {
  position: relative;
  position: absolute;
  left: 0;
  bottom: -1.57rem;
  width: 5.27rem;
  height: 4.54rem;
  opacity: .9;
  background-color: #f0bd52ff;
}
.header-info-center {
  width: 4.95rem;
  height: 4.14rem;
  border: 2px solid #ffffff;
}
.mobile-about-us {
  margin-top: 2.27rem;
  margin-bottom: 1.4rem;
}
.mobile-heng {
  width: 0.62rem;
  height: 0.02rem;
  background-color: #999999ff;
}
.about-img {
    margin-top: .4rem;
  width: 7.1rem;
  height: 8rem;
}
</style>