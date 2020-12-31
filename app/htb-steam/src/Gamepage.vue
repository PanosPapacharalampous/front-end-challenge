<template>
  <div class="backgroundGameImage" :style="{'background-image':'url('+ imageBackgroundUrl+')'}" >
    <div class="gameBackgroundGlow">
      <b-container class="Hcontainer">
        <b-row>
          <b-col cols="12">
             <div class="apphub_AppName" v-for="(title,index) in gameInfo" :key="index">{{title.name}}</div> 
          </b-col>
        </b-row>
        <b-row>
          <b-col cols xs="12"  sm="12" md="12" lg="8">
            <slider :info="gameInfo" :movies="movies"></slider>
          </b-col>
          <b-col cols xs="12" sm="12" md="12" lg="4" class="rightCol">
           <short-description></short-description>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <b-container class="pt30">
      <b-row>
        <b-col cols xs="12" sm="12" md="12" lg="8">
          <price-banner></price-banner>
        </b-col>
      </b-row>
    </b-container>  
  </div>
</template>

<script>
import Slider from './components/Slider.vue'
import PriceBanner from './components/GamePrice.vue'
import ShortDescription from './components/ShortDescription.vue'
import axios from 'axios';
export default {

  data() {
    return {
      gameInfo:[],
      movies:[],
      imageBackgroundUrl:'https://cdn.cloudflare.steamstatic.com/steam/apps/413150/page_bg_generated_v6b.jpg?t=1608624324'
    }
  },
  mounted() {
    axios.get(`https://htb-steam-api.vercel.app/api/apps?appid=${this.$route.params.id}`)
    .then(response => {
      this.gameInfo = response.data;
      if(response.data[0].movies.length > 0){
        this.movies=response.data[0].movies;
      }
    })
    .catch(e => {
      this.errors.push(e)
    });
  },
  methods:{
  },
  components:{
    Slider:Slider,
    PriceBanner:PriceBanner,
    ShortDescription:ShortDescription
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
}
.gameBackgroundGlow{
  background: url('./assets/game_page_background_shadow.png');
  background-position: bottom;
  padding-bottom: 1px;
  background-repeat: no-repeat;
  margin: 0px auto;
}
</style>