<template>
  <!--contains all the div-->
  <div id="all">
    <!--mouse  follower-->
    <div class="cursor"></div>
    <!--mouse  follower-->
    <!--loader-->
    <div id="loader">
      <span class="color">{{ $t('GENERAL.FIRST_NAME') }}</span>{{ $t('GENERAL.LAST_NAME') }}
    </div>
    <!--loader-end-->
    <!--link-screen-->
    <div id="breaker">
    </div>
    <div id="breaker-two">
    </div>
    <!--link-screen-->
    <!--Main-Section-->
    <!--Navigator-fullscreen-->
    <div id="navigation-content">
      <div class="logo">
        <img src="./assets/images/willy wonka logo.png" alt="logo">
      </div>
      <div class="navigation-close">
        <span class="close-first"></span>
        <span class="close-second"></span>
      </div>
      <div class="navigation-links">
        <a href="#" data-text="HOME" id="home-link">HOME</a>
        <a href="#" data-text="ABOUT" id="about-link">ABOUT</a>
        <a href="#" data-text="PORTFOLIO" id="portfolio-link">PORTFOLIO</a>
        <a href="#" data-text="CONTACT" id="contact-link">CONTACT</a>
      </div>
    </div>
    <!--Navigator-Fullscreen END-->
    <!--Home Page-->
    <!--Menubar-->
    <div id="navigation-bar">
      <img src="./assets/images/willy wonka logo.png" alt="logo">
      <div class="menubar">
        <span class="first-span"></span>
        <span class="second-span"></span>
        <span class="third-span"></span>
      </div>
    </div>
    <!--Menubar End-->
    <!--Header-->
    <div id="header">
      <div id="particles"></div>
      <!--Social Media Links-->
      <div class="social-media-links">
        <a href="#"><img src="./assets/images/instagram logo.png" class="social-media" alt="instagram-logo"></a>
        <!--Your instagram homepage link inser in place of "#"-->
        <a href="#"><img src="./assets/images/facebook logo.png" class="social-media" alt="facebook-logo"></a>
        <a href="#"><img src="./assets/images/linkedin logo.png" class="social-media" alt="linkedin-logo"></a>
        <a href="#"><img src="./assets/images/twitter logo.png" class="social-media" alt="twitter-logo"></a>

      </div>
      <!--Social Media Links end-->
      <div class="header-content">
        <div class="header-content-box">
          <div class="firstline"><span class="color">{{ $t('GENERAL.FIRST_NAME') }} </span>{{ $t('GENERAL.LAST_NAME') }}
          </div>
          <div class="secondline">
            I'm a
            <span class="txt-rotate color" data-period="1200"
                  data-rotate='[ " Designer.", " Blogger.", " Freelancer." ]'></span>
            <span class="slash">|</span>
          </div>
          <div class="contact">
            <a href="Mailto:#"><img src="./assets/images/mail.png" alt="email-pic" class="contactpic"></a>
            <!--Your email Id write in place of "#"-->
            <a href="Tel:#"><img src="./assets/images/call.png" alt="phone-pic" class="contactpic"></a>
            <!--Your telephone number Id write in place of "#"-->
          </div>
        </div>
      </div>
      <!--header image-->
      <div class="header-image">
        <img src="./assets/images/man.jpg" alt="logo">
      </div>
      <!--header image end-->
    </div>
    <!--Header End-->
    <!--HomePage End-->
    <!--Main-Section End-->
  </div>
</template>

<script lang='ts'>
import {Component, Vue} from 'vue-property-decorator';

@Component({})
export default class App extends Vue {
}
</script>
