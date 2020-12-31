<template>
  <div class="thumb-example">
    <div class="swiper-container gallery-top">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(value,index) in movies" :key="`value-${index}`"><video :src="value.mp4[480]" autoplay muted/></div>
        <!-- <div class="swiper-slide"> <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/413150/ss_980472fb4f4860639155880938b6ec292a0648c4.1920x1080.jpg?t=1608624324"/></div>
        <div class="swiper-slide"><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/413150/ss_980472fb4f4860639155880938b6ec292a0648c4.1920x1080.jpg?t=1608624324"/></div>
        <div class="swiper-slide"> <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/413150/ss_4ff3fe6e9555052aaa076866407b0ba68fe73132.600x338.jpg?t=1608624324"/></div>
        <div class="swiper-slide"> <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/413150/ss_980472fb4f4860639155880938b6ec292a0648c4.1920x1080.jpg?t=1608624324"/></div>
        <div class="swiper-slide"><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/413150/ss_980472fb4f4860639155880938b6ec292a0648c4.1920x1080.jpg?t=1608624324"/></div>
        <div class="swiper-slide"> <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/413150/ss_4ff3fe6e9555052aaa076866407b0ba68fe73132.600x338.jpg?t=1608624324"/></div>
        <div class="swiper-slide"> <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/413150/ss_980472fb4f4860639155880938b6ec292a0648c4.1920x1080.jpg?t=1608624324"/></div>
        <div class="swiper-slide"><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/413150/ss_980472fb4f4860639155880938b6ec292a0648c4.1920x1080.jpg?t=1608624324"/></div> -->
      </div>
    </div>
    <div class="swiper-container gallery-thumbs">
      <div class="swiper-wrapper">
        <div class="swiper-slide"> <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/413150/ss_4ff3fe6e9555052aaa076866407b0ba68fe73132.600x338.jpg?t=1608624324"/></div>
        <div class="swiper-slide"> <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/413150/ss_980472fb4f4860639155880938b6ec292a0648c4.1920x1080.jpg?t=1608624324"/></div>
        <div class="swiper-slide"><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/413150/ss_980472fb4f4860639155880938b6ec292a0648c4.1920x1080.jpg?t=1608624324"/></div>
        <div class="swiper-slide"> <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/413150/ss_4ff3fe6e9555052aaa076866407b0ba68fe73132.600x338.jpg?t=1608624324"/></div>
        <div class="swiper-slide"> <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/413150/ss_980472fb4f4860639155880938b6ec292a0648c4.1920x1080.jpg?t=1608624324"/></div>
        <div class="swiper-slide"><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/413150/ss_980472fb4f4860639155880938b6ec292a0648c4.1920x1080.jpg?t=1608624324"/></div>
        <div class="swiper-slide"> <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/413150/ss_4ff3fe6e9555052aaa076866407b0ba68fe73132.600x338.jpg?t=1608624324"/></div>
        <div class="swiper-slide"> <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/413150/ss_980472fb4f4860639155880938b6ec292a0648c4.1920x1080.jpg?t=1608624324"/></div>
        <div class="swiper-slide"><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/413150/ss_980472fb4f4860639155880938b6ec292a0648c4.1920x1080.jpg?t=1608624324"/></div>
      </div>
    </div>
  </div>
</template>

<script>
 import 'swiper/css/swiper.css'
 import Swiper from 'swiper';

  export default {
    name: 'swiper-example-thumbs-gallery',
    title: 'Thumbs gallery with Two-way control',

    data() {
      return {
      }
    },
    props:{
     info:Array,
     movies:Array
    },
    mounted() {
      var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        slidesPerView: 5,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
      });
      var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 10,
        effect: 'fade',
        speed: 600,
        autoplay: {
          delay: 6000,
          disableOnInteraction: false,
        },
        thumbs: {
          swiper: galleryThumbs
        }
      });
    },
    methods:{
    },
  }
</script>

<style lang="scss" scoped>
  .thumb-example{
    display: block;
    width: 100%;

    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .swiper-container {
      width: 100%;
      height: 337px;
      margin-left: auto;
      margin-right: auto;
      .swiper-slide {
        background-size: cover;
        background-position: center;
      }
      &.gallery-top {
        width: 100%;
      }
      &.gallery-thumbs {
        height: 77px;
        box-sizing: border-box;
        padding: 10px 0;
        .swiper-slide {
          cursor: pointer;
          height: 100%;
          opacity: 0.4;
        }
        .swiper-slide-thumb-active{
          opacity: 1;
        }
      }
    }
  }
</style>