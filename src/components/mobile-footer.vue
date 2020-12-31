<template>
  <div class="mobile-footer-container">
    <div class="footer-info-detail">
      <span class="fz-20 fc-f0b">联系方式</span>
      <div class="fl-al mr-t-30">
        <img class="phone-img" src="../images/pc/phone.png" alt="" />
        <div class="fz-15 mr-l-20">0451 123 123</div>
      </div>
      <div class="fl-al mr-t-20">
        <img class="message-img" src="../images/pc/message.png" alt="" />
        <span class="fz-15 mr-l-20">sales@benshome.com.au</span>
      </div>
      <div class="fl-al mr-t-20">
        <img class="address-img" src="../images/pc/address.png" alt="" />
        <span class="fz-15 mr-l-20">242 Mains Road, Sunnybank QLD 4109</span>
      </div>
    </div>
    <div class="fl-cen mr-t-50">
      <img class="icon-img" src="../images/mobile/face.png" alt="" />
      <img class="icon-img mr-l-40" src="../images/mobile/bird.png" alt="" />
      <img class="icon-img mr-l-40" src="../images/mobile/video.png" alt="" />
      <img class="icon-img mr-l-40" src="../images/mobile/ball.png" alt="" />
    </div>
    <div class="fl-cenc">
      <div class="fz-15 mr-t-50">营业时间</div>
      <div class="fz-15 mr-t-30">周一至周日 9:30AM – 5:30PM</div>
      <img class="recode-img mr-t-60" src="../images/mobile/recode.png" alt="" />
      <div class="fz-12 mr-t-10">添加微信</div>
    </div>
    <div class="footer-bottom-box fl-cen">
      <span class="fz-11 fc-fff">Copyright©.2020 BENS CURTAINS, All Rights Reserved.</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer-info-detail {
  padding-left: 0.38rem;
  display: flex;
  flex-direction: column;
}
.phone-img {
  width: 0.2rem;
  height: 0.24rem;
}
.message-img {
  width: 0.2rem;
  height: 0.16rem;
}
.address-img {
  width: 0.2rem;
  height: 0.22rem;
}
.icon-img {
  width: 0.58rem;
  height: 0.58rem;
}
.recode-img {
  width: 2rem;
  height: 2rem;
}
.footer-bottom-box {
  margin-top: .66rem;
  width: 100%;
  height: 1.1rem;
  background-color: #333232FF;
}
</style>