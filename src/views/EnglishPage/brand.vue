<template>
  <div class="brand-container">
    <!-- 头部banner -->
    <div class="brand-header-box">
      <img
        class="goods-banner-style"
        src="../../images/pc/goods-banner.png"
        alt=""
      />
      <div class="brand-header-right">
        <div class="fz-50 fz-sjt brand-header-title-1">本家窗帘 时刻陪伴</div>
        <div class="fz-50 fz-sjt brand-header-title-2 mr-t-10">
          装点你的未来
        </div>
        <div class="title-info-remark mr-t-30">
          <div class="fz-12">
            窗帘给房间带来奢华和魅力，并提供无限的装饰和机
          </div>
          <div class="fz-12 mr-t-10">会，以增加个性。</div>
          <div class="fz-12 mr-t-10">
            我们的窗帘适用于各种形状和大小的窗户。
          </div>
          <div class="fz-12 mr-t-10">窗帘是永恒的经典。</div>
          <div class="price-btn fl-cen mr-t-20">
            <span class="fz-11 fc-333">获取报价</span>
          </div>
        </div>
        <img
          class="english-img"
          src="../../images/pc/english-info.png"
          alt=""
        />
      </div>
    </div>
    <div class="brand-goods-list">
      <div class="goods-list-shu"></div>
      <div class="goods-list-kuai"></div>
      <div class="brand-goods-one fl-bt">
        <div class="goods-one-left">
          <div class="fz-24">布艺窗帘</div>
          <div class="brand-heng mr-t-20"></div>
          <div class="fz-12 mr-t-20">精品布料 专利轨道 千种选择 免费测量</div>
          <div class="fz-12 mr-t-10">免费报价 免费安装</div>
          <div class="fz-12 mr-t-10">全新展厅定时消毒 进店咨询提供口罩</div>
        </div>
        <div class="goods-one-right">
          <img
            class="brand-goods-img"
            src="../../images/pc/home-banner1.png"
            alt=""
          />
          <img class="goods-img-a" src="../../images/pc/a.png" alt="" />
        </div>
      </div>
      <div class="brand-goods-two fl-al">
        <div class="goods-two-right">
          <img class="goods-img-b mr-t-30" src="../../images/pc/b.png" alt="" />
          <img
            class="brand-goods-img2"
            src="../../images/pc/home-banner1.png"
            alt=""
          />
          <img class="b-wang" src="../../images/pc/wang.png" alt="" />
        </div>
        <div class="goods-one-left">
          <div class="fz-24">窗纱</div>
          <div class="brand-heng mr-t-20"></div>
          <div class="fz-12 mr-t-20">精品布料 专利轨道 千种选择 免费测量</div>
          <div class="fz-12 mr-t-10">免费报价 免费安装</div>
          <div class="fz-12 mr-t-10">全新展厅定时消毒 进店咨询提供口罩</div>
        </div>
      </div>
      <div class="brand-goods-three fl-bt">
        <div class="goods-one-left">
          <div class="fz-24">卷帘</div>
          <div class="brand-heng mr-t-20"></div>
          <div class="fz-12 mr-t-20">精品布料 专利轨道 千种选择 免费测量</div>
          <div class="fz-12 mr-t-10">免费报价 免费安装</div>
          <div class="fz-12 mr-t-10">全新展厅定时消毒 进店咨询提供口罩</div>
        </div>
        <div class="goods-one-right">
          <img
            class="brand-goods-img"
            src="../../images/pc/home-banner1.png"
            alt=""
          />
          <img class="goods-img-a" src="../../images/pc/c.png" alt="" />
        </div>
      </div>
      <div class="brand-goods-two fl-al">
        <div class="goods-two-right">
          <img class="goods-img-b mr-t-30" src="../../images/pc/d.png" alt="" />
          <img
            class="brand-goods-img2"
            src="../../images/pc/home-banner1.png"
            alt=""
          />
           <img class="b-wang2" src="../../images/pc/wang.png" alt="" />
        </div>
        <div class="goods-one-left">
          <div class="fz-24">百叶窗</div>
          <div class="brand-heng mr-t-20"></div>
          <div class="fz-12 mr-t-20">精品布料 专利轨道 千种选择 免费测量</div>
          <div class="fz-12 mr-t-10">免费报价 免费安装</div>
          <div class="fz-12 mr-t-10">全新展厅定时消毒 进店咨询提供口罩</div>
        </div>
      </div>
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
@font-face {
  font-family: sjtfont;
  src: url("../../styles/font-sjt/sjt-font.ttf");
}
.fz-sjt {
  font-family: sjtfont;
}
.brand-header-box {
  position: relative;
  width: 100%;
  height: 11rem;
  background-color: #f6f6f6ff;
}
.goods-banner-style {
  position: absolute;
  left: 0;
  top: 1.9rem;
  width: 11.15rem;
  height: 8.08rem;
  z-index: 7;
}
.brand-header-right {
  position: relative;
  position: absolute;
  bottom: 0.2rem;
  right: 0.81rem;
  width: 15.37rem;
  height: 8.31rem;
  background-color: #ffffff;
}
.english-img {
  position: absolute;
  right: -0.81rem;
  bottom: 0;
  width: 16.18rem;
  height: 1.78rem;
}
.price-btn {
  cursor: pointer;
  width: 1.5rem;
  height: 0.5rem;
  background-color: #f0bd52ff;
}
.brand-header-title-1 {
  position: absolute;
  left: 4.03rem;
  top: 1.27rem;
  z-index: 19;
}
.brand-header-title-2 {
  position: absolute;
  z-index: 19;
  left: 4.23rem;
  top: 2.24rem;
}
.title-info-remark {
  position: absolute;
  top: 3.84rem;
  left: 8.48rem;
}
.brand-goods-list {
  position: relative;
  margin-top: 3rem;
  margin-bottom: 3rem;
}
.brand-goods-one {
  position: relative;
  width: 100%;
  height: 4.78rem;
}
.brand-goods-two {
  position: relative;
  margin-top: 2rem;
  width: 100%;
  height: 5.77rem;
}
.brand-goods-three {
  position: relative;
  margin-top: 2rem;
  width: 100%;
  height: 4.78rem;
}
.brand-heng {
  width: 0.62rem;
  height: 0.04rem;
  background-color: #999999ff;
}
.goods-one-left {
  margin-left: 1.6rem;
}
.goods-one-right {
  display: flex;
  margin-right: 1.6rem;
}
.goods-two-right {
  position: relative;
  display: flex;
}
.brand-goods-img {
  width: 7.14rem;
  height: 4.78rem;
  z-index: 9;
}
.brand-goods-img2 {
  width: 5.18rem;
  height: 5.77rem;
  z-index: 9;
}
.goods-img-a {
  margin-left: -0.6rem;
  width: 1.93rem;
  height: 2.6rem;
}
.goods-img-b {
  margin-left: 1.6rem;
  width: 1.93rem;
  height: 2.6rem;
}
.goods-list-shu {
  position: absolute;
  left: 1.6rem;
  top: -3.77rem;
  width: 0.06rem;
  height: 2rem;
  background-color: #f0bd54ff;
}
.b-wang {
  position: absolute;
  right: -2.2rem;
  bottom: -1.11rem;
  width: 4.09rem;
  height: 3.24rem;
}
.b-wang2 {
  position: absolute;
  top: -2.35rem;
  right: -1.8rem;
  width: 4.09rem;
  height: 3.24rem;
}
.goods-list-kuai {
    width: 1.1rem;
    height: 3.09rem;
    background-color: #F0BD52FF;
    position: absolute;
    bottom: -2.15rem;
    right: 1.6rem;
}
</style>