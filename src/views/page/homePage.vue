<template>
  <div id="home-page-container" :style="[{ height: itemHeight + 'px' }]">
    <!-- 头部定位导航 -->
    <div class="home-page-nav fl-bt">
      <img class="logo-img" src="../../images/logo.png" alt="logo" />
      <div class="fl-al right-nav-box">
        <div
          class="nav-item fl-cen mr-l-30"
          v-for="(item, index) in navList"
          :key="index"
          :class="[count === item.index ? 'bg-check' : '']"
          @click="navHandleClick(item.index)"
        >
          <span class="fz-10" :class="[count === item.index ? 'fc-fff' : '']">{{
            item.name
          }}</span>
        </div>
      </div>
    </div>
    <div id="content-sorll" :style="[{ height: homePageHeight + 'px' }]">
      <!-- 第一屏 view -->
      <div class="content-one" :style="[{ height: itemHeight + 'px' }]">
        <img
          :class="[count === 1 ? 'fourth-show' : 'fourth-none']"
          class="first-img-banner"
          src="http://gw.shcx.trunshare.com/banner1.png"
          alt="banner"
        />
        <div
          class="first-content"
          :class="[count === 1 ? 'first-content-show' : 'first-content-none']"
        >
          <div class="first-title-1 fl-co">
            <span class="fz-20 fc-fff">一站式服务平台</span>
            <span class="fz-27 fc-fff mr-t-20">丰富您的社区生活！</span>
            <div class="first-info fz-11 fc-fff mr-t-40">
              通过各类刚需服务和资源对接，丰富小区宜居感受。搭建省会圈容纳邻里互助、二手闲置等互动版块，营造和谐生活圈。
            </div>
            <div class="fl-cen upload-app-btn mr-t-40" @click="firstHandleBtn">
              <span class="fc-fff fz-11">下载APP</span>
            </div>
          </div>
        </div>
      </div>
      <!-- 第二屏 view -->
      <div class="content-two" :style="[{ height: itemHeight + 'px' }]">
        <div class="fl-cenc second-box">
          <img
            class="dian-img-style"
            src="../../images/zhuangshi.png"
            alt="dian"
          />
          <div class="text-box-two">
            <div class="fz-30 fw-bold item-title fl-cen">关于我们</div>
            <img class="ying-text" src="../../images/about.png" alt="text" />
          </div>
          <span class="fz-9 mr-t-30"
            >成都三合创享网络科技有限公司致力为广大中小物业小区提供数字化解决方案</span
          >
        </div>
        <div class="second-bottom-content fl-cen mr-t-50">
          <div
            class="us-do-work fl-coc us-do-work-1"
            :class="[count === 2 ? 'second-top2' : 'second-top-noe']"
          >
            <img class="icon-style" src="../../images/icon3.png" alt="" />
            <span class="fz-15 fw-bold mr-t-30">我们要做什么</span>
            <div class="fz-9 text-cen mr-t-40">
              为打造智慧社区一站式服务平台
            </div>
            <div class="fz-9 text-cen mr-t-10">提供专业的解决方案</div>
          </div>
          <div
            class="us-do-work fl-coc us-do-work-bg"
            :class="[count === 2 ? 'second-top' : 'second-top-noe']"
          >
            <img class="icon-style" src="../../images/icon2.png" alt="" />
            <span class="fz-15 fw-bold mr-t-30 fc-fff">社区现状分析</span>
            <div class="fz-9 text-cen mr-t-40 fc-fff">
              智慧社区面临的挑战：安全和治安问
            </div>
            <div class="fz-9 text-cen mr-t-10 fc-fff">
              题、运维问题、物业与业主的
            </div>
            <div class="fz-9 text-cen mr-t-10 fc-fff">
              沟通问题、 经营收益问题
            </div>
          </div>
          <div
            class="us-do-work fl-coc"
            :class="[count === 2 ? 'second-top2' : 'second-top-noe']"
          >
            <img class="icon-style" src="../../images/icon1.png" alt="" />
            <span class="fz-15 fw-bold mr-t-30">智慧社区实现目标</span>
            <div class="fz-9 text-cen mr-t-40">提升业主满意度</div>
            <div class="fz-9 text-cen mr-t-10">降低物业管理成本</div>
            <div class="fz-9 text-cen mr-t-10">提高运营增长点</div>
          </div>
        </div>
      </div>
      <!-- 第三屏 view -->
      <div class="content-thr fl-bt" :style="[{ height: itemHeight + 'px' }]">
        <div class="thr-left-box">
          <img class="three-box-kuang" src="../../images/kuang.png" alt="" />
          <div
            class="fl-fc three-box"
            :class="[count === 3 ? 'thr-show' : 'thr-none']"
          >
            <img
              class="dian-img-style"
              src="../../images/zhuangshi.png"
              alt="dian"
            />
            <div class="text-box-three">
              <div class="fz-30 fw-bold item-title-three fl-cen">APP展示</div>
              <img
                class="ying-text"
                src="../../images/appshow.png"
                alt="text"
              />
            </div>
            <div class="fl-co mr-t-30">
              <span class="fz-9 mr-t-20"
                >生活管家APP包括物业、生活、门禁三大类。</span
              >
              <span class="fz-9 mr-t-20"
                >物业包括：物业缴费、业主信息管理、物业公告、报事报修、访客</span
              >
              <span class="fz-9 mr-t-20">邀约、快递查询等。</span>
              <span class="fz-9 mr-t-20"
                >生活包括：社区生活、购物商城、社区团购、生鲜商城等…</span
              >
            </div>
          </div>
        </div>
        <img
          class="thr-right-img"
          :class="[count === 3 ? 'fourth-show' : 'fourth-none']"
          src="http://gw.shcx.trunshare.com/mobile-page.png"
          alt=""
        />
      </div>
      <!-- 第四屏 view -->
      <div class="content-four" :style="[{ height: itemHeight + 'px' }]">
        <div
          class="fl-cenc fourth-top-style"
          :class="[count === 4 ? 'fourth-show' : 'fourth-none']"
        >
          <img
            class="dian-img-style"
            src="../../images/zhuangshi.png"
            alt="dian"
          />
          <div class="text-box-two">
            <div class="fz-30 fw-bold item-title fl-cen">特色功能</div>
            <img class="ying-text" src="../../images/features.png" alt="text" />
          </div>
          <span class="fz-9 mr-t-30"
            >通过调查收集智慧社区目前面临的问题，针对问题作出相应的解决方案。致力于为物业人员提供一套完善的综合服务系统，针对社区现状，依托于物联网、云计算、大</span
          >
          <span class="fz-9 mr-t-10"
            >数据技术，融合社区各种资源和服务，提升社区综合管理效率，为社区居民提供安全、健康、便捷、幸福的生活环境。</span
          >
        </div>
        <div
          class="fl-cen"
          style="transition: all 2s"
          :class="[count === 4 ? 'fourth-show-bottom' : 'fourth-none']"
        >
          <div>
            <div class="fourth-left-row">
              <div class="row-title-yuan"></div>
              <span class="fz-15 fw-bold mr-t-10">物业ERP</span>
              <span class="fz-9 mr-t-20"
                >物业缴费、业主信息管理、物业公告、报事报</span
              >
              <span class="fz-9 mr-t-10"
                >修、访客邀请、人事管理、居住证明…</span
              >
            </div>
            <div class="fourth-left-row mr-t-30">
              <div class="row-title-yuan"></div>
              <span class="fz-15 fw-bold mr-t-10">智能硬件</span>
              <span class="fz-9 mr-t-20"
                >智能门禁、智能门锁、视频摄像机、人脸抓拍</span
              >
              <span class="fz-9 mr-t-10"
                >相机、车辆抓拍相机、通道门、梯控系统…</span
              >
            </div>
            <div class="fourth-left-row mr-t-30">
              <div class="row-title-yuan"></div>
              <span class="fz-15 fw-bold mr-t-10">智慧家庭</span>
              <span class="fz-9 mr-t-20"
                >门控家居视频监控、安全厨卫管理、安全阳</span
              >
              <span class="fz-9 mr-t-10"
                >台、智能环境控制、智能照明、智能窗户…</span
              >
            </div>
          </div>
          <img
            class="forth-center-img"
            src="http://gw.shcx.trunshare.com/mobile-func.png"
            alt=""
          />
          <div>
            <div class="fourth-right-row">
              <div class="row-title-yuan"></div>
              <span class="fz-15 fw-bold mr-t-10">生活服务</span>
              <span class="fz-9 mr-t-20"
                >家政保洁、开锁维修、外卖生鲜、上家服务、线</span
              >
              <span class="fz-9 mr-t-10">上商城、社区团购、扶贫农产品…</span>
            </div>
            <div class="fourth-right-row mr-t-30">
              <div class="row-title-yuan"></div>
              <span class="fz-15 fw-bold mr-t-10">政务服务</span>
              <span class="fz-9 mr-t-20">政策公告、社区新闻、政务服务、</span>
              <span class="fz-9 mr-t-10">居住证明…</span>
            </div>
            <div class="fourth-right-row mr-t-30">
              <div class="row-title-yuan"></div>
              <span class="fz-15 fw-bold mr-t-10">广告投放</span>
              <span class="fz-9 mr-t-20">提供广告投放位</span>
            </div>
          </div>
        </div>
      </div>
      <!-- 第五屏 view -->
      <div
        class="content-five fl-bt"
        id="five-content"
        :style="[{ height: itemHeight + 'px' }]"
      >
        <div
          class="five-left-box"
          :class="[count === 5 ? 'five-show' : 'five-none']"
        >
          <div class="fl-co three-box">
            <img
              class="dian-img-style other-left1"
              src="../../images/zhuangshi.png"
              alt="dian"
            />
            <div class="text-box-five other-left2">
              <div class="fz-30 fw-bold item-title-three fl-cen">APP下载</div>
              <img
                class="ying-text"
                src="../../images/Download.png"
                alt="text"
              />
            </div>
            <div class="fl-co mr-t-30 other-left3">
              <span class="fz-9 mr-t-20">确认过眼神，是你要找的APP~ </span>
              <span class="fz-9 mr-t-20"
                >生活管家，致力于为物业人员提供一套完善的综合服务系统，针对社区</span
              >
              <span class="fz-9 mr-t-20"
                >现状，依托于物联网、云计算、大数据技术，融合社区各种资源和服</span
              >
              <span class="fz-9 mr-t-20"
                >务，提升社区综合管理效率，为社区居民提供安全、健康、</span
              >
              <span class="fz-9 mr-t-20">便捷、幸福的生活环境。</span>
            </div>
            <div class="other-left3 fl-al mr-t-40">
              <div
                class="fl-cen dowload-btn"
                style="
                  background: linear-gradient(to right, #1fdcc4ff, #278ae5ff);
                "
              >
                <img class="five-icon1" src="../../images/ios.png" alt="" />
                <span class="fz-8 fc-fff mr-l-20">iPhone下载</span>
              </div>
              <div class="fl-cen dowload-btn mr-l-40">
                <img class="five-icon2" src="../../images/andriod.png" alt="" />
                <span class="fz-8 fc-22c mr-l-20">Android下载</span>
              </div>
            </div>
          </div>
        </div>
        <img
          class="five-right-img"
          :class="[count === 5 ? 'fourth-show' : 'fourth-none']"
          src="http://gw.shcx.trunshare.com/mobile.png"
          alt=""
        />
      </div>
      <!-- 第六屏 view -->
      <div class="content-six" :style="[{ height: itemHeight + 'px' }]">
        <div
          class="six-tell-we fl-al"
          :class="[count === 6 ? 'six-show' : 'six-none']"
        >
          <div class="left-we-info">
            <img class="six-logo-img" src="../../images/logo2.png" alt="" />
            <div class="six-left-info">
              <span class="fz-15 fc-333">联系我们</span>
              <span class="fz-9 mr-t-40 fc-333">服务热线： 18980941908</span>
              <span class="fz-9 mr-t-30 fc-333"
                >公司地址：四川省成都市高新区天府软件园E6-1</span
              >
              <span class="fz-9 mr-t-30 fc-333"
                >公司邮箱：wwb@trunshare.com</span
              >
              <img
                class="mr-t-50 six-code-img"
                src="../../images/code.jpg"
                alt=""
              />
              <span class="fz-9 mr-t-10 mr-l-14">微信二维码</span>
            </div>
          </div>
          <div class="right-we-form">
            <div class="fl-co ruzhu-form">
              <span class="fz-15 fc-ece">物业入驻</span>
              <span class="fz-9 mr-t-10 fc-ece">填写信息，拉近我们的距离</span>
              <input
                class="six-input-style fz-9 mr-t-30"
                type="text"
                placeholder="物业公司名称"
                placeholder-color="#fff"
                v-model="form.companyName"
              />
              <input
                class="six-input-style fz-9 mr-t-10"
                type="text"
                placeholder="联系人"
                placeholder-color="#fff"
                v-model="form.name"
              />
              <input
                class="six-input-style fz-9 mr-t-10"
                type="text"
                placeholder="联系电话"
                placeholder-color="#fff"
                v-model.trim="form.tel"
              />
              <input
                class="six-input-style fz-9 mr-t-10"
                type="text"
                placeholder="备注"
                placeholder-color="#fff"
                v-model="form.remark"
              />
              <div class="submit-btn mr-t-60">
                <span class="fz-9">提交</span>
              </div>
            </div>
          </div>
        </div>
        <img
          class="six-bottom-banner"
          :class="[count === 6 ? 'fourth-show' : 'fourth-none']"
          src="http://gw.shcx.trunshare.com/banner2.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<script>
import { isMobile } from "../../utils/common";
export default {
  data() {
    return {
      homePageHeight: 0,
      itemHeight: 0,
      contentLenght: 5, // 模块长度
      count: 0, // 当前模块
      itemTopHeight: 0,
      scrollType: true,
      startX: 0,
      startY: 0,
      navList: [
        {
          index: 1,
          name: "网站首页",
        },
        {
          index: 2,
          name: "关于我们",
        },
        {
          index: 3,
          name: "APP展示",
        },
        {
          index: 4,
          name: "特色功能",
        },
        {
          index: 5,
          name: "APP下载",
        },
        {
          index: 6,
          name: "联系我们",
        },
      ],
      form: {
        companyName: "", // 公司名称
        name: "", // 联系人
        tel: "", // 联系电话
        remark: "", // 备注
      },
    };
  },
  mounted() {
    this.count = 1;
    this.itemHeight = document.documentElement.clientHeight;
    this.homePageHeight = document.documentElement.clientHeight * 6;
    window.onresize = () => {
      this.itemHeight = document.documentElement.clientHeight;
      this.homePageHeight = document.documentElement.clientHeight * 6;
    };
    //给页面绑定滑轮滚动事件
    if (document.addEventListener) {
      //firefox
      document.addEventListener(
        "DOMMouseScroll",
        (e) => {
          e = e || window.event;
          if (e.wheelDelta) {
            //第一步：先判断浏览器IE，谷歌滑轮事件
            if (e.wheelDelta > 0) {
              //当滑轮向上滚动时
              if (this.count === 1) return;
              if (!this.scrollType) return;
              this.upScroll();
            }
            if (e.wheelDelta < 0) {
              //当滑轮向下滚动时
              if (this.count > 5) return;
              if (!this.scrollType) return;
              this.downScroll();
            }
          } else if (e.detail) {
            //Firefox滑轮事件
            if (e.detail > 0) {
              //当滑轮向上滚动时
              if (this.count === 1) return;
              if (!this.scrollType) return;
              this.upScroll();
            }
            if (e.detail < 0) {
              //当滑轮向下滚动时
              if (this.count > 5) return;
              if (!this.scrollType) return;
              this.downScroll();
            }
          }
        },
        false
      );
    }
    //滚动滑轮触发scrollFunc方法 //ie 谷歌
    window.onmousewheel = document.onmousewheel = (e) => {
      e = e || window.event;
      if (e.wheelDelta) {
        //第一步：先判断浏览器IE，谷歌滑轮事件
        if (e.wheelDelta > 0) {
          //当滑轮向上滚动时
          if (this.count === 1) return;
          if (!this.scrollType) return;
          this.upScroll();
        }
        if (e.wheelDelta < 0) {
          //当滑轮向下滚动时
          if (this.count > 5) return;
          if (!this.scrollType) return;
          this.downScroll();
        }
      } else if (e.detail) {
        //Firefox滑轮事件
        if (e.detail > 0) {
          //当滑轮向上滚动时
          if (this.count === 1) return;
          if (!this.scrollType) return;
          this.upScroll();
        }
        if (e.detail < 0) {
          //当滑轮向下滚动时
          if (this.count > 5) return;
          if (!this.scrollType) return;
          this.downScroll();
        }
      }
    };
    if (!isMobile()) return;
    let pageDom = document.getElementById("content-sorll");
    pageDom.addEventListener(
      "touchmove",
      (e) => {
        let endY = Number(e.touches[0].clientY);
        let diffY = endY - this.startY;
        try {
          if (diffY > 0) {
            if (this.count === 1) return;
            if (!this.scrollType) return;
            this.upScroll();
          } else if (diffY < 0) {
            if (this.count > 5) return;
            if (!this.scrollType) return;
            this.downScroll();
          }
        } catch {
          return;
        }
      },
      false
    );
    pageDom.addEventListener(
      "touchstart",
      (e) => {
        try {
          this.startX = Number(e.touches[0].clientX);
          this.startY = Number(e.touches[0].clientY);
        } catch {
          return;
        }
      },
      false
    );
  },
  watch: {},
  methods: {
    // 导航跳转
    navHandleClick(n) {
      if (n === this.count) return;
      this.count = n;
      this.scrollType = false;
      const domScroll = document.getElementById("content-sorll");
      this.itemTopHeight = this.itemHeight * (n - 1);
      domScroll.style.top = -this.itemTopHeight + "px";
      const timer = setTimeout(() => {
        this.scrollType = true;
        clearTimeout(timer);
      }, 1000);
    },
    // 下载app 跳转
    firstHandleBtn() {
      this.scrollType = false;
      this.count = 5;
      const domScroll = document.getElementById("content-sorll");
      this.itemTopHeight = this.itemHeight * 4;
      domScroll.style.top = -this.itemTopHeight + "px";
      const timer = setTimeout(() => {
        this.scrollType = true;
        clearTimeout(timer);
      }, 1000);
    },
    // 向上滚动
    upScroll() {
      this.scrollType = false;
      const domScroll = document.getElementById("content-sorll");
      this.itemTopHeight -= this.itemHeight;
      domScroll.style.top = -this.itemTopHeight + "px";
      this.count--;
      const timer = setTimeout(() => {
        this.scrollType = true;
        clearTimeout(timer);
      }, 1000);
    },
    // 向下滚动
    downScroll() {
      this.scrollType = false;
      const domScroll = document.getElementById("content-sorll");
      this.itemTopHeight += this.itemHeight;
      domScroll.style.top = -this.itemTopHeight + "px";
      this.count++;
      const timer = setTimeout(() => {
        this.scrollType = true;
        clearTimeout(timer);
      }, 1000);
    },
  },
};
</script>
<style scoped>
#home-page-container {
  position: relative;
  overflow: hidden;
  width: 100%;
}
.home-page-nav {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 1.2rem;
  z-index: 99999;
  background-color: #fff;
}
.logo-img {
  margin-left: 1.58rem;
  width: 1.52rem;
  height: 0.6rem;
}
.right-nav-box {
  margin-right: 1.6rem;
}
.nav-item {
  cursor: pointer;
  width: 1.16rem;
  height: 0.4rem;
  border-radius: 0.2rem 0.2rem;
}
.bg-check {
  background-color: #03ebc2ff;
}
.nav-item :hover {
  cursor: pointer;
  width: 1.16rem;
  height: 0.4rem;
  border-radius: 0.2rem 0.2rem;
  background-color: #03ebc2ff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}
/* 第一屏 css */
.content-one {
  position: relative;
  overflow: hidden;
  width: 100%;
}
.first-img-banner {
  width: 100%;
  height: 100%;
  transition: all 2s;
}
.first-content {
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 1s;
}
.first-content-show {
  opacity: 1;
  top: 0;
}
.first-content-none {
  opacity: 0;
  top: -10rem;
}
.first-title-1 {
  margin-left: 2.52rem;
  margin-top: 2.48rem;
}
.first-info {
  width: 6.9rem;
  line-height: 2;
  word-wrap: break-word;
  word-break: break-all;
}
.upload-app-btn {
  cursor: pointer;
  letter-spacing: 0.06rem;
  width: 2.3rem;
  height: 0.6rem;
  border-radius: 0.1rem;
  background-color: #03ebc2ff;
  box-shadow: 0 0 4px #19dad140;
}
/* 第二屏 css */
.content-two {
  width: 100%;
  position: relative;
  overflow: hidden;
}
.dian-img-style {
  width: 1.46rem;
  height: 0.64rem;
}
.text-box-two {
  position: relative;
  width: 3.45rem;
  height: 0.66rem;
}
.ying-text {
  width: 100%;
  height: 100%;
}
.item-title {
  position: absolute;
  left: 0;
  top: 0.1rem;
  width: 100%;
  height: 100%;
  letter-spacing: 0.04rem;
}
.second-box {
  margin-top: 1.84rem;
}
.us-do-work {
  position: relative;
  transition: all 2s;
  position: relative;
  width: 3.5rem;
  height: 3.72rem;
  box-shadow: 0 0 0.4rem #18d3b640;
  border-radius: 0.2rem;
  transition: all 1.5s;
}
.us-do-work-bg {
  margin-left: 1rem;
  margin-right: 1rem;
  background: linear-gradient(to right, #1cdcccff, #05c9f7ff);
}
.second-top {
  top: 1rem;
  opacity: 1;
}
.second-top2 {
  top: 0;
  opacity: 1;
}
.second-top-noe {
  top: -1rem;
  opacity: 0;
}
.icon-style {
  margin-top: 0.26rem;
  width: 1.06rem;
  height: 1.06rem;
  border-radius: 50%;
}
/* 第三屏 css */
.content-thr {
  position: relative;
  overflow: hidden;
  width: 100%;
}
.thr-left-box {
  position: relative;
  margin-top: 1.5rem;
  width: 7.92rem;
  height: 8.55rem;
}
.three-box-kuang {
  width: 100%;
  height: 100%;
}
.three-box {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  margin-top: 1.76rem;
  transition: all 1s;
}
.thr-show {
  opacity: 1;
  top: 0;
}
.thr-none {
  top: -5rem;
  opacity: 0;
}
.text-box-three {
  position: relative;
  width: 4.24rem;
  height: 0.65rem;
}
.item-title-three {
  position: absolute;
  left: 0;
  top: 0.14rem;
  width: 100%;
  height: 100%;
  letter-spacing: 0.04rem;
}
.thr-right-img {
  margin-right: 1.56rem;
  margin-top: 0.5rem;
  width: 9.03rem;
  height: 7.74rem;
  transition: all 2s;
}
/* 第四屏 css */
.content-four {
  position: relative;
  overflow: hidden;
  width: 100%;
}
.fourth-top-style {
  transition: all 2s;
  margin-top: 1.22rem;
}
.row-title-yuan {
  width: 0.25rem;
  height: 0.25rem;
  border-radius: 50%;
  background-color: #03ebc2ff;
}
.fourth-left-row {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
}
.fourth-right-row {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.forth-center-img {
  margin: 0 0.7rem;
  width: 6.79rem;
  height: 7.24rem;
}
.fourth-show {
  opacity: 1;
}
.fourth-show-bottom {
  margin-top: -0.6rem;
  opacity: 1;
}
.fourth-none {
  opacity: 0;
}
/* 第五屏 css */
.content-five {
  position: relative;
  overflow: hidden;
  width: 100%;
}
.five-right-img {
  margin-top: 0.3rem;
  margin-right: 0.87rem;
  width: 8rem;
  height: 7.7rem;
  transition: all 2s;
}
.text-box-five {
  position: relative;
  width: 3.88rem;
  height: 0.65rem;
}
.five-left-box {
  position: relative;
  transition: all 2s;
  top: -2rem;
  margin-top: 1.5rem;
  width: 8rem;
  height: 100%;
}
.other-left1 {
  margin-left: 2.83rem;
}
.other-left2 {
  margin-left: 1.58rem;
}
.other-left3 {
  margin-left: 2.24rem;
}
.dowload-btn {
  cursor: pointer;
  width: 2.32rem;
  height: 0.68rem;
  border-radius: 0.1rem;
  border: 0.03rem solid #22c1cfff;
}
.five-icon1 {
  width: 0.21rem;
  height: 0.26rem;
}
.five-icon2 {
  width: 0.22rem;
  height: 0.24rem;
}
.five-show {
  top: 0;
  opacity: 1;
}
.five-none {
  opacity: 0;
}
/* 第六屏 css */
.content-six {
  position: relative;
  overflow: hidden;
  width: 100%;
}
.six-tell-we {
  position: absolute;
  left: 50%;
  margin-left: -7.08rem;
  width: 14.16rem;
  height: 5.84rem;
  border-radius: 0.4rem;
  overflow: hidden;
  z-index: 9;
  transition: all 2s;
}
.left-we-info {
  position: relative;
  width: 7.08rem;
  height: 100%;
  background-color: #f3f9f5ff;
}
.six-logo-img {
  margin: 2rem 0 0 0.89rem;
  width: 4.95rem;
  height: 1.93rem;
}
.right-we-form {
  width: 7.08rem;
  height: 100%;
  background-color: #18d8d4ff;
}
.six-bottom-banner {
  z-index: 4;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 4.9rem;
  transition: all 2s;
}
.six-left-info {
  position: absolute;
  left: 0.89rem;
  top: 0.97rem;
  display: flex;
  flex-direction: column;
}
.six-code-img {
  width: 1.19rem;
  height: 1.19rem;
}
.six-input-style {
  width: 4.03rem;
  border: none;
  outline-style: none;
  background-color: #18d8d4ff;
  color: #ecececff;
  border-bottom: 1px solid #ecececff;
  display: flex;
  align-items: center;
  padding: 0.1rem 0;
}
#content-sorll {
  width: 100%;
  transition: all 1s;
  position: absolute;
  left: 0;
  top: 0;
}
.submit-btn {
  cursor: pointer;
  width: 1.09rem;
  height: 0.38rem;
  border-radius: 0.38rem 0.38rem;
  background-color: #fff;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
}
.submit-btn :hover {
  cursor: pointer;
  width: 1.09rem;
  height: 0.38rem;
  border-radius: 0.38rem 0.38rem;
  background-color: #000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.six-show {
  top: 2.5rem;
  opacity: 1;
}
.six-none {
  top: 0;
  opacity: 0;
}
.ruzhu-form {
  margin: 0.86rem 0 0 1.5rem;
}
::-webkit-input-placeholder {
  /* WebKit browsers */
  color: #ecececff;
}
:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #ecececff;
}
::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #ecececff;
}
:-ms-input-placeholder {
  /* Internet Explorer 10+ */
  color: #ecececff;
}
</style>