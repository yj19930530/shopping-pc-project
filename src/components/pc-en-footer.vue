<template>
  <div class="footer-container">
    <div class="footer-top">
      <div class="footer-center fl-bt">
        <div class="fl-al">
          <img class="footer-logo" src="../images/home-logo.png" alt="" />
          <div class="footer-info">
            <div class="fl-al">
              <img class="phone-img" src="../images/pc/phone.png" alt="" />
              <span class="fz-15 fc-fff mr-l-10">0451 123 123</span>
            </div>
            <div class="fl-al mr-t-30">
              <img class="message-img" src="../images/pc/message.png" alt="" />
              <span class="fz-15 fc-fff mr-l-10">sales@benshome.com.au</span>
            </div>
            <div class="fl-al mr-t-30">
              <img class="address-img" src="../images/pc/address.png" alt="" />
              <span class="fz-15 fc-fff mr-l-10">
                242 Mains Road, Sunnybank QLD 4109</span
              >
            </div>
            <div class="fl-al mr-t-30">
              <img class="time-img" src="../images/pc/time.png" alt="" />
              <span class="fz-15 fc-fff mr-l-10"
                >Monday - Friday: 9:30AM – 5:30PM</span
              >
            </div>
          </div>
        </div>
        <div class="fl-cenc">
          <img
            class="recode-img mr-t-10"
            src="../images/pc/recode.png"
            alt=""
          />
          <span class="fz-12 fc-fff mr-t-10">Add WeChat</span>
          <div class="fl-al mr-t-10">
            <img class="internet-icon" src="../images/pc/facebook.png" alt="" />
            <img
              class="internet-icon mr-l-20"
              src="../images/pc/bird.png"
              alt=""
            />
            <img
              class="internet-icon mr-l-20"
              src="../images/pc/video.png"
              alt=""
            />
            <img
              class="internet-icon mr-l-20"
              src="../images/pc/ball.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <div class="fl-cen footer-bottom">
      <span class="fz-10 fc-fff"
        >Copyright©.2020 BENS CURTAINS, All Rights Reserved.</span
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer-container {
  width: 100%;
  height: 4.5rem;
  background-color: #333232ff;
}
.footer-top {
  width: 100%;
  height: 3.42rem;
  border-bottom: 1px solid #999999ff;
}
.footer-center {
  margin: auto;
  padding-top: 0.4rem;
  width: 16rem;
}
.footer-info {
  margin-left: 1rem;
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
.time-img {
  width: 0.2rem;
  height: 0.2rem;
}
.footer-logo {
  width: 2.03rem;
  height: 1.92rem;
}
.recode-img {
  width: 1.6rem;
  height: 1.6rem;
}
.internet-icon {
  width: 0.3rem;
  height: 0.3rem;
}
.footer-bottom {
  width: 100%;
  height: 1.06rem;
}
</style>