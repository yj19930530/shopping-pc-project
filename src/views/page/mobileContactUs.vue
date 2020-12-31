<template>
  <div class="mobile-contact-container">
    <div class="mobile-contact-header">
      <img
        class="contact-banner"
        src="../../images/mobile/contact-banner.png"
        alt=""
      />
      <div class="mobile-contact-center fl-cen">
        <div class="contact-title-box fl-cenc">
          <div class="fz-27 fc-fff ff-sjt">填写资料 获取报价</div>
          <div class="fc-fff fz-18 mr-t-40">我们将尽快与您联系</div>
        </div>
      </div>
    </div>
    <div class="contact-form-box">
      <div class="form-input-box">
        <div class="fz-15">姓名</div>
        <input
          class="fl-al input-style fz-15 mr-t-20"
          type="text"
          placeholder="请输入姓名"
        />
      </div>
      <div class="form-input-box">
        <div class="fz-15">电话</div>
        <input
          class="fl-al input-style fz-15 mr-t-20"
          type="text"
          placeholder="请输入电话"
        />
      </div>
      <div class="form-input-box">
        <div class="fz-15">邮箱</div>
        <input
          class="fl-al input-style fz-15 mr-t-20"
          type="text"
          placeholder="请输入邮箱"
        />
      </div>
      <div class="form-input-box">
        <div class="fz-15">留言</div>
        <textarea
          class="textarea-style fz-15 mr-t-20"
          rows="5"
          placeholder="请输入您的内容"
        ></textarea>
      </div>
      <div class="submit-btn fl-cen mr-t-40">
        <span class="fz-17">提交</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.mobile-contact-header {
  position: relative;
  width: 100%;
  height: 4.76rem;
}
.contact-banner {
  width: 100%;
  height: 100%;
}
.mobile-contact-center {
  position: absolute;
  top: 0.9rem;
  left: 0.9rem;
  opacity: 0.9;
  width: 5.56rem;
  height: 2.82rem;
  background-color: #f0bd52ff;
}
.contact-title-box {
  width: 5.08rem;
  height: 2.4rem;
  border: 2px solid #fff;
}
.contact-form-box {
  margin: 1.2rem auto 0;
  width: 6.24rem;
}
.input-style {
  padding-left: 0.34rem;
  width: 5.6rem;
  height: 0.76rem;
  outline-style: none;
  border: 2px solid #f0bd54ff;
}
.textarea-style {
  padding: 0.25rem 0.34rem;
  width: 5.26rem;
  outline-style: none;
  border: 2px solid #f0bd54ff;
}
.form-input-box {
  margin-top: 0.4rem;
}
.submit-btn {
    margin-bottom: 1.3rem;
    width: 6.24rem;
    height: .8rem;
    background-color: #F0BD54FF;
}
</style>