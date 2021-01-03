<template>
  <div class="thumb-example">
    <div class="swiper-container gallery-top">
      <div class="swiper-wrapper"> 
        <div class="swiper-slide" v-for="(value,index) in movies" :key="`value-${index}`"><video :src="value.mp4[480]" controls muted /></div>
        <div class="swiper-slide" v-for="(value,index) in slidesImg" :key="`slide-${index}`"><img :src="value.path_full" /></div>
      </div>
    </div>
    <div class="swiper-container gallery-thumbs">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(mthumb,index) in movies" :key="`mthumb-${index}`"><img :src="mthumb.thumbnail" /></div>
        <div class="swiper-slide" v-for="(value,index) in slidesImg" :key="`slideTh-${index}`"><img :src="value.path_thumbnail" /></div>
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
    movies:Array,
    slidesImg:Array
  },
  mounted() {
    setTimeout(() =>{
      var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        slidesPerView: 5,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        breakpoints:{
          320: {
            slidesPerView: 2
          },
          375: {
            slidesPerView: 3
          },
          480: {
            slidesPerView: 3
          },
          600: {
            slidesPerView: 3
          },
          768: {
            slidesPerView: 4
          },
          992: {
            slidesPerView: 4
          },
          1024: {
            slidesPerView: 5
          },
          1200: {
            slidesPerView: 5
          },
          1360: {
            slidesPerView: 5
          }
        }
      });
      var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 10,
        effect: 'fade',
        speed: 600,
        disableOnInteraction:true,
        autoplay: {
          delay: 6000,
          disableOnInteraction: true,
        },
        thumbs: {
          swiper: galleryThumbs
        }
      });
      galleryTop.on('slideChange',function(){
        let videos = document.querySelectorAll('.swiper-slide video');
        [].forEach.call(videos, function(video){
          video.pause();
          video.currentTime=0;
        });
      })
    },2000);
  }
}
</script>

<style lang="scss" scoped>
@import '../global/variables.scss';
@import '../global/mixins.scss';

.thumb-example{
  display: block;
  width: 100%;

  img,video{
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
      @include respond-to($small){
        height: auto;
      }
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