<template>
  <div class="backgroundGameImage" :style="{'background-image':'url('+ imageBackgroundUrl+')'}" >
    <div class="backToHome" @click="returnHome"><b-icon-arrow-left-circle-fill></b-icon-arrow-left-circle-fill></div>
    <div class="gameBackgroundGlow">
      <b-container class="Hcontainer">
        <b-row class="firstColRow">
          <b-col cols="12">
             <div class="apphub_AppName" v-for="(title,index) in gameInfo" :key="index">{{title.name}}</div> 
          </b-col>
        </b-row>
        <b-row>
          <b-col cols xs="12"  sm="12" md="12" lg="8">
            <slider
             :info="gameInfo"
             :movies="movies"
             :slidesImg="slidesImg"
             >
            </slider>
          </b-col>
          <b-col cols xs="12" sm="12" md="12" lg="4" class="rightCol">
            <short-description
             :shortDes="shortDes"
             :headerImg="headerImg"
             :releaseD="releaseD"
             :devs="devs"
             :publishers="publishers"
             >
            </short-description>
            <collapsable-cat :categories="categories"></collapsable-cat>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <b-container class="pt30">
      <b-row>
        <b-col cols xs="12" sm="12" md="12" lg="12">
          <price-banner 
           :priceObj="priceObj"
           :title="title"
           :platforms="platforms"
           >
         </price-banner>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="pt30">
      <b-row>
        <b-col cols xs="12" sm="12" md="12" lg="12">
          <about-game :aboutGame="aboutGame"></about-game>
        </b-col>
      </b-row>
    </b-container>    
  </div>
</template>

<script>
import Slider from './components/Slider.vue';
import PriceBanner from './components/GamePrice.vue';
import ShortDescription from './components/ShortDescription.vue';
import CollapsableCat from './components/CollapsableCat.vue';
import AboutGame from './components/AboutGame.vue';
import axios from 'axios';

export default {

  data() {
    return {
      gameInfo:[],
      movies:[],
      slidesImg:[],
      imageBackgroundUrl:'',
      shortDes:'',
      headerImg:'',
      releaseD:{},
      devs:[],
      publishers:[],
      priceObj:{},
      title:'',
      platforms:{},
      categories:[],
      aboutGame:'',
    }
  },
  mounted() {
    axios.get(`https://htb-steam-api.vercel.app/api/apps?appid=${this.$route.params.id}`)
    .then(response => {
      this.gameInfo = response.data;
      if(response.data[0].movies.length > 0){
        this.movies = response.data[0].movies;
      }
      if(response.data[0].screenshots.length > 0){
        this.slidesImg = response.data[0].screenshots;
      }
      this.imageBackgroundUrl=response.data[0].background;
      this.shortDes = response.data[0].short_description;
      this.headerImg = response.data[0].header_image;
      this.releaseD = response.data[0].release_date;
      this.devs = response.data[0].developers;
      this.publishers = response.data[0].publishers;
      this.priceObj = response.data[0].price_overview;
      this.title = response.data[0].name;
      this.platforms = response.data[0].platforms;
      this.categories = response.data[0].categories;
      this.aboutGame = response.data[0].about_the_game;
    })
    .catch(e => {
      console.log(e); 
    });
  },
  components:{
    Slider:Slider,
    PriceBanner:PriceBanner,
    ShortDescription:ShortDescription,
    CollapsableCat,
    AboutGame
  },
  methods:{
    returnHome(){
      this.$router.push({name:'home'})
    }
  }
}
</script>

<style lang="scss" scoped>
@import './global/variables.scss';
@import './global/mixins.scss';

.rightCol{
  padding-left: 0px;
  @include respond-to($medium){
    padding-left: 15px;
    margin-top: 20px;
  }
}

.backToHome{
  margin-left: 50px;
  padding-top: 30px;
  width: fit-content;
  @include respond-to($small){
    margin-left: 15px;
  }
  svg{
    font-size: 33px;
    color: $white;
    cursor: pointer;
    &:hover{
      color:$blueGame!important;
    }
  }
}
.apphub_AppName{
  font-family: "Motiva Sans", Sans-serif;
  font-weight: normal;
  padding-left: 0px;
  font-size: 26px;
  line-height: 32px;
  text-overflow: ellipsis;
  color: $white;
  padding-bottom: 15px;
}
.backgroundGameImage{
  background-position: center top;
  background-repeat: no-repeat;
  position: relative;
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