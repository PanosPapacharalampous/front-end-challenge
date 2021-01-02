<template>
  <div>
    <div class="game_header_image_ctn">
      <img class="game_header_image_full" :src="headerImg">
    </div>
    <div class="game_description_snippet" v-html="shortDes"></div>
    <div class="user_reviews">
      <div class="release_date">
        <div class="subtitle column">Release Date:</div>
        <div v-if="releaseD.coming_soon" class="date">Coming soon</div>
        <div v-else class="date">{{releaseD.date}}</div>
      </div>
      <div class="dev_row">
        <div class="subtitle column">Developer:</div>
        <div class="summary column">
          <span v-for="(value,index) in devs" :key="`dev-${index}`">{{getValWithComma(value,index)}}</span>
        </div>
      </div>
      <div class="dev_row">
        <div class="subtitle column">Publisher:</div>
        <div class="summary column">
          <span v-for="(value,index) in publishers" :key="`dev-${index}`">{{getValWithComma(value,index)}}</span>
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
    getValWithComma(dev,index){
      if(index === 0){
        return `${dev}`
      }else{
        return `, ${dev}`
      }
    }
  },
  components:{
  
  }
}
</script>

<style lang="scss" scoped>
.game_header_image_ctn{
  margin-bottom: 7px;
  height: auto;
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
  color: #c6d4df;
  margin-top: 10px;
  .release_date{
    display: flex;
    line-height: 16px;
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
      span{
        color:#8f98a0;
      }
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