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
        <!--        <a href="#" data-text="HOME" id="home-link">HOME</a>-->
        <!--        <a href="#" data-text="ABOUT" id="about-link">ABOUT</a>-->
        <!--        <a href="#" data-text="PORTFOLIO" id="portfolio-link">PORTFOLIO</a>-->
        <!--        <a href="#" data-text="CONTACT" id="contact-link">CONTACT</a>-->
        <router-link to="home" id="home-link">HOME</router-link>
        <router-link to="about" id="about-link">ABOUT</router-link>
        <router-link to="portfolio" id="portfolio-link">PORTFOLIO</router-link>
        <router-link to="contact" id="contact-link">CONTACT</router-link>
      </div>
    </div>
    <router-view/>
    <!--Navigator-Fullscreen END-->
    <!--Main-Section End-->
  </div>
</template>

<script lang='ts'>
import {Component, Vue} from 'vue-property-decorator';

@Component({})
export default class App extends Vue {
}
</script>
