<template>
  <div class="about-us-container">
    <!-- 头部banner -->
    <div class="about-header">
      <div class="about-header-title">
        <div class="about-header-center">
          <span class="fz-40 fc-fff fz-sjt">为懂享受生活的你量身定制</span>
          <div class="fz-12 fc-fff mr-t-30 text-lin">
            精品布料 专利轨道 千种选择 免费测量 免费报价 免费安装
            主营产品：窗帘、窗纱、卷帘、百叶窗
          </div>
        </div>
      </div>
      <img
        class="about-banner1"
        src="../../images/pc/about-banner1.png"
        alt=""
      />
    </div>
    <!-- 关于我们介绍 -->
    <div class="about-us-info">
      <div class="about-us-shu"></div>
      <div class="about-us-kuai"></div>
      <img class="about-us-wang" src="../../images/pc/wang.png" alt="" />
      <div class="fl-cenc">
        <span class="fz-30 fw-bold mr-t-90">关于我们</span>
        <div class="about-us-heng mr-t-30"></div>
        <span class="fz-17 mr-t-30"
          >位于布里斯班桑尼班克的Bens Curtains陈列室展示了南郊最大</span
        >
        <span class="fz-17 mr-t-10"
          >范围的窗帘，卷帘和百叶窗。我们专注于窗帘，卷帘和</span
        >
        <span class="fz-17 mr-t-10">百叶窗，以适应各种口味，风格和预算。</span>
        <div class="about-goods-content">
          <div class="first-goods-box fl-cenc">
            <img class="first-goods-img" src="../../images/pc/home-banner1.png" alt="" />
            <span class="fz-24 mr-t-60">图片描述</span>
          </div>
          <div class="first-goods-box fl-coc mr-t-30">
            <img class="two-goods-img" src="../../images/pc/home-banner1.png" alt="" />
            <span class="fz-24 mr-t-60">图片描述</span>
          </div>
          <div class="first-goods-box fl-coc">
            <img class="three-goods-img" src="../../images/pc/home-banner1.png" alt="" />
            <span class="fz-24 mr-t-60">图片描述</span>
          </div>
          <div class="first-goods-box fl-coc">
            <img class="four-goods-img" src="../../images/pc/home-banner1.png" alt="" />
            <span class="fz-24 mr-t-60">图片描述</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 地图 -->
    <div class="fl-cen">
         <img class="about-map" src="../../images/pc/about-map.png" alt="">
    </div>
   
    <Pcfooter />
  </div>
</template>
<script>
import Pcfooter from "../../components/pc-footer";
export default {
  data() {
    return {};
  },
  components: {
    Pcfooter,
  },
};
</script>
<style scoped>
.about-header {
  position: relative;
  width: 100%;
  height: 9.78rem;
}
.about-banner1 {
  width: 100%;
  height: 100%;
}
@font-face {
  font-family: sjtfont;
  src: url("../../styles/font-sjt/sjt-font.ttf");
}
.fz-sjt {
  font-family: sjtfont;
}
.about-header-title {
  position: absolute;
  left: 0.82rem;
  bottom: 0.87rem;
  width: 7.8rem;
  height: 5.4rem;
  background-color: #f0bd52ff;
}
.about-header-center {
  padding: 1.3rem 0.76rem;
  display: flex;
  flex-direction: column;
}
.text-lin {
  line-height: 1.7;
}
.about-us-info {
  position: relative;
}
.about-us-shu {
  position: absolute;
  left: 1.6rem;
  top: 0.45rem;
  width: 0.06rem;
  height: 2rem;
  background-color: #f0bd54ff;
}
.about-us-kuai {
  position: absolute;
  right: 0.96rem;
  top: 10.77rem;
  width: 0.92rem;
  height: 1.5rem;
  background-color: #f0bd54ff;
  z-index: 9;
}
.about-us-wang {
  position: absolute;
  right: 0;
  top: 11.38rem;
  width: 4.09rem;
  height: 3.24rem;
  z-index: 7;
}
.about-goods-content {
    margin-top: 1.2rem;
    width: 16rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.about-us-heng {
  width: 0.62rem;
  height: 0.04rem;
  background-color: #999999ff;
}
.first-goods-box {
    width: 6.4rem;
}
.first-goods-img {
    width: 6.4rem;
    height: 8.12rem;
}
.two-goods-img {
    width: 7.64rem;
    height: 4.14rem;
}
.three-goods-img {
    margin-top: 2.1rem;
    width: 7.64rem;
    height: 4.14rem;
}
.four-goods-img {
    margin-top: -1.3rem;
    width: 6.4rem;
    height: 6.96rem;
}
.about-map {
    margin-top: 1.3rem;
    margin-bottom: 1.2rem;
    width: 16rem;
    height: 8rem;
}
</style>