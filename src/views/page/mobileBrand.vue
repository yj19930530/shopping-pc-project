<template>
  <div class="mobile-brand-container">
    <div class="mobile-brand-header">
      <img
        class="brand-banner"
        src="../../images/mobile/brand-banner.png"
        alt=""
      />
      <div class="mobile-brand-center fl-cen">
        <div class="brand-header-info fl-cenc">
          <div class="fz-27 ff-sjt fc-fff">本家窗帘 时刻陪伴</div>
          <div class="fz-27 ff-sjt fc-fff mr-t-10">装点你的未来</div>
          <div class="fz-12 fc-fff mr-t-20">
            窗帘给房间带来奢华和魅力，并提供无限的
          </div>
          <div class="fz-12 fc-fff mr-t-20">装饰和机会，以增加个性。</div>
          <div class="fz-12 fc-fff mr-t-20">
            我们的窗帘适用于各种形状和大小的窗户。
          </div>
          <div class="fz-12 fc-fff mr-t-20">窗帘是永恒的经典。</div>
        </div>
      </div>
      <img
        class="english-text"
        src="../../images/mobile/english-text.png"
        alt=""
      />
    </div>
    <div class="price-btn fl-cen">
      <span class="fz-12 fc-fff">获取报价</span>
    </div>
    <div class="brand-list-goods">
      <div class="mr-b-80">
        <div class="fl-cen">
          <img
            class="goods-img-one"
            src="../../images/pc/home-banner2.png"
            alt=""
          />
        </div>
        <div class="brand-details">
          <div class="fz-24 fw-bold mr-t-30">布艺窗帘</div>
          <div class="goods-heng mr-t-20"></div>
          <div class="fz-12 mr-t-30">精品布料 专利轨道 千种选择 免费测量</div>
          <div class="fz-12 mr-t-20">免费报价 免费安装</div>
          <div class="fz-12 mr-t-20">全新展厅定时消毒 进店咨询提供口罩</div>
        </div>
      </div>
      <div class="mr-b-80">
        <div class="fl-cen">
          <img
            class="goods-img-two"
            src="../../images/pc/home-banner2.png"
            alt=""
          />
        </div>
        <div class="brand-details">
          <div class="fz-24 fw-bold mr-t-30">窗纱</div>
          <div class="goods-heng mr-t-20"></div>
          <div class="fz-12 mr-t-30">精品布料 专利轨道 千种选择 免费测量</div>
          <div class="fz-12 mr-t-20">免费报价 免费安装</div>
          <div class="fz-12 mr-t-20">全新展厅定时消毒 进店咨询提供口罩</div>
        </div>
      </div>
      <div class="mr-b-80">
        <div class="fl-cen">
          <img
            class="goods-img-one"
            src="../../images/pc/home-banner2.png"
            alt=""
          />
        </div>
        <div class="brand-details">
          <div class="fz-24 fw-bold mr-t-30">卷帘</div>
          <div class="goods-heng mr-t-20"></div>
          <div class="fz-12 mr-t-30">精品布料 专利轨道 千种选择 免费测量</div>
          <div class="fz-12 mr-t-20">免费报价 免费安装</div>
          <div class="fz-12 mr-t-20">全新展厅定时消毒 进店咨询提供口罩</div>
        </div>
      </div>
      <div class="mr-b-80">
        <div class="fl-cen">
          <img
            class="goods-img-two"
            src="../../images/pc/home-banner2.png"
            alt=""
          />
        </div>
        <div class="brand-details">
          <div class="fz-24 fw-bold mr-t-30">百叶窗</div>
          <div class="goods-heng mr-t-20"></div>
          <div class="fz-12 mr-t-30">精品布料 专利轨道 千种选择 免费测量</div>
          <div class="fz-12 mr-t-20">免费报价 免费安装</div>
          <div class="fz-12 mr-t-20">全新展厅定时消毒 进店咨询提供口罩</div>
        </div>
      </div>
    </div>
    <div class="brand-two-kuai">
      <div class="kuai-style"></div>
    </div>
    <Mbfooter />
  </div>
</template>

<script>
import Mbfooter from "../../components/mobile-footer";
export default {
  components: {
    Mbfooter,
  },
};
</script>

<style scoped>
.mobile-brand-header {
  position: relative;
  width: 100%;
  height: 4.76rem;
}
.brand-banner {
  width: 100%;
  height: 100%;
}
.mobile-brand-center {
  position: absolute;
  left: 0.97rem;
  top: 2.38rem;
  width: 5.56rem;
  height: 5.26rem;
  background-color: #f0bd52ff;
  opacity: 0.9;
}
.brand-header-info {
  width: 5.07rem;
  height: 4.8rem;
  border: 2px solid #fff;
}
.english-text {
  position: absolute;
  left: 0;
  bottom: -2.51rem;
  width: 100%;
  height: 0.96rem;
}
.price-btn {
  margin: 3.23rem auto 0;
  width: 2.2rem;
  height: 0.6rem;
  background-color: #cf951bff;
}
.goods-img-one {
  width: 6.6rem;
  height: 4.78rem;
}
.goods-img-two {
  width: 5.18rem;
  height: 5.77rem;
}
.goods-heng {
  width: 0.62rem;
  height: 0.02rem;
  background-color: #999999;
}
.brand-details {
  padding-left: 1.16rem;
}
.brand-list-goods {
  margin-top: 0.64rem;
}
.brand-two-kuai {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.kuai-style {
  margin-bottom: 1.2rem;
  width: 3.75rem;
  height: 0.61rem;
  background-color: #f0bd52ff;
}
</style>