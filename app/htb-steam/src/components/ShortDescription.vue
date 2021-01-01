<template>
  <div>
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
          <a href="https://store.steampowered.com/developer/ConcernedApe?snr=1_5_9__2000">ConcernedApe</a>
        </div>
      </div>
      <div class="dev_row">
        <div class="subtitle column">Publisher:</div>
        <div class="summary column">
          <a href="https://store.steampowered.com/publisher/ConcernedApe?snr=1_5_9__2000">ConcernedApe</a>
        </div>
      </div>																
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
     
    }
  },
  props:{
    shortDes:String,
    headerImg:String,
    releaseD:Object,
    devs:Array,
    publishers:Array
  },
  mounted() {

  },
  methods:{
  },
  components:{
  
  }
}
</script>

<style lang="scss" scoped>
.game_header_image_ctn{
  margin-bottom: 7px;
  height: 151px;
  .game_header_image_full{
    width: 100%;
    height: 100%;
    object-fit: cover;
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
</style>