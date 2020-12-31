<template>
  <div class="backgroundGameImage" :style="{'background-image':'url('+ imageBackgroundUrl+')'}" >
    <div class="gameBackgroundGlow">
      <b-container class="Hcontainer">
        <b-row>
          <b-col cols="12">
            <div class="apphub_AppName">Sea of Thieves</div>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols xs="12"  sm="12" md="12" lg="8">
            <slider></slider>
          </b-col>
          <b-col cols xs="12" sm="12" md="12" lg="4" class="rightCol">
            <div class="game_header_image_ctn">
              <img class="game_header_image_full" src="https://cdn.cloudflare.steamstatic.com/steam/apps/413150/header.jpg?t=1608624324">
            </div>
            <div class="game_description_snippet">
              You've inherited your grandfather's old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life. Can you learn to live off the land and turn these overgrown fields into a thriving home?
            </div>
            <div class="user_reviews">
              <div class="release_date">
                <div class="subtitle column">Release Date:</div>
                <div class="date">26 Feb, 2016</div>
              </div>
              <div class="dev_row">
                <div class="subtitle column">Developer:</div>
                <div class="summary column">
                  <a href="https://store.steampowered.com/developer/ConcernedApe?snr=1_5_9__2000">ConcernedApe</a>									</div>
              </div>
            
              <div class="dev_row">
                <div class="subtitle column">Publisher:</div>
                <div class="summary column">
                <a href="https://store.steampowered.com/publisher/ConcernedApe?snr=1_5_9__2000">ConcernedApe</a>										</div>
              </div>																
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import Slider from './components/Slider.vue'
export default {

  data() {
    return {
      imageBackgroundUrl:'https://cdn.cloudflare.steamstatic.com/steam/apps/413150/page_bg_generated_v6b.jpg?t=1608624324'
    }
  },
  mounted() {

  },
  methods:{
  },
  components:{
    Slider:Slider
  }
}
</script>

<style lang="scss" scoped>
.rightCol{
  padding-left: 0px;
}
.apphub_AppName{
  font-family: "Motiva Sans", Sans-serif;
  font-weight: normal;
  padding-left: 0px;
  font-size: 26px;
  line-height: 32px;
  text-overflow: ellipsis;
  color: white;
  padding-bottom: 15px;
}
.backgroundGameImage{
  background-position: center top;
  background-repeat: no-repeat;
  min-width: 972px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.gameBackgroundGlow{
  background: url('./assets/game_page_background_shadow.png');
  background-position: bottom;
  padding-bottom: 1px;
  background-repeat: no-repeat;
  margin: 0px auto;
}
.user_reviews{
  font-size: 12px;
  color: #556772;
  margin-top: 10px;
  .release_date{
    display: flex;
    line-height: 16px;
    padding-top: 9px;
    padding-bottom: 13px;
    .date{
      color: #8f98a0;
    }
  }
  .subtitle{
    text-transform: uppercase;
    font-size: 10px;
    padding-right: 10px;
    min-width: 94px;
  }
  .column{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .dev_row{
    display: flex;
    line-height: 16px;
    .summary{
      a{
        color: #67c1f5;
        &:hover{
          color: white;
        }
      }
    }
  }
}
.game_description_snippet{
    max-height: 111px;
    overflow: hidden;
    font-size: 13px;
    line-height: 18px;
    padding-right: 16px;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    color: #c6d4df;
}
.game_header_image_ctn{
  margin-bottom: 7px;
  height: 151px;
  .game_header_image_full{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>