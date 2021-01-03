<template>
  <div class="linksWrapper">
    <router-link v-for="(value,index) in results.slice(0,10)" :key="index" :to="{name:'game', params:{id:value.appid}}" class="tab_item">
      <div class="tab_item_cap">
        <img class="tab_item_cap_img" :src="value.header_image">
      </div>
      <div class="infoWrapper">
        <div class="tab_item_content">
          <div class="tab_item_name">{{value.name}}</div>
          <div class="tab_item_details">
            <span v-if="value.platforms.windows" class="platform_img win"></span>
            <span v-if="value.platforms.mac" class="platform_img mac"></span>
            <span v-if="value.platforms.linux" class="platform_img linux"></span>
            <div class="tab_item_top_tags">
                <span v-for="(cat,index) in value.categories" :key="index" class="top_tag">{{getCategory(cat.description,index)}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="discount_block tab_item_discount">
        <div v-if="value.price_overview && value.price_overview.discount_percent > 0" class="discount_pct">- {{value.price_overview.discount_percent}}%</div>
        <div  v-if="value.price_overview" class="discount_prices">
          <div v-if="value.price_overview.initial_formatted" class="discount_original_price">{{value.price_overview.initial_formatted}}</div>
          <div class="discount_final_price">{{value.price_overview.final_formatted}}</div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props:{
    results:Array
  },
  methods:{
    getCategory(cat,index){
      if(index === 0){
        return `${cat}`
      }else{
        return `, ${cat}`
      }
    }
  }
}
</script>

<style lang="scss">
@import '../global/variables.scss';
@import '../global/mixins.scss';

.tab_content_ctn_parent{
  .linksWrapper{
    display: none;
    &.active{
      display: flex;
      flex-wrap: wrap;
      margin-left: -15px;
      margin-right: -15px;
    }
    .infoWrapper{
      display: flex;
      flex-direction: column;
      background: rgba(0, 0, 0, 0.2);
      padding: 10px;
      height: 100%;
      box-shadow: 2px 2px 10px #000;
      z-index: 1;
      .tab_item_content{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 12px;
        display: flex;
        flex-direction: column;
        .tab_item_name{
            color: $grwhite;
            font-size: 1.25em;
            line-height: 18px;
            text-overflow: ellipsis;
            white-space: nowrap;
            display: block;
            overflow: hidden;
            transition: color 0.25s;
        }
        .tab_item_details{
          color: $graydblue;
          line-height: 20px;
          .platform_img{
              vertical-align: bottom;
              opacity: 0.3;
              display: inline-block;
              width: 20px;
              height: 20px;
              background-repeat: no-repeat;

              &.win{
                  background-image: url('../assets/icon_platform_win.png');
              }
              &.mac{
                  background-image: url('../assets/icon_platform_mac.png');
              }
              &.linux{
                  background-image: url('../assets/icon_platform_linux.png');
              }
          }
          .tab_item_top_tags{
            word-break: break-word;
            width: 100%;
            max-width: 100%;
            white-space: initial;
            .top_tag{
                white-space: nowrap;
                font-size: 12px;
            }
          }
        }
      }
    }
    
    .tab_item{
      position: relative;
      margin-bottom: 40px;
      display: flex;
      flex-direction: column;
      width: calc(100%/3);
      padding-left: 15px;
      padding-right: 15px;
      height: auto;
      @include respond-to($medium){
         width: calc(100%/2);
      }
      @include respond-to($xsmall){
         width: calc(100%/1);
      }
      .tab_item_cap{
        display: flex;
        position: relative;
        flex-direction: column;
        height: auto;
        width: 100%;
        z-index: 2;
        img{
          border-style: none;
          object-fit: cover;
          width: 100%;
          height: auto;
        }
      }
      &:hover{
        .infoWrapper{
          background:$hoverblack;
        }
      }
    }
    .tab_item_discount{
      position: absolute;
      bottom: -19px;
      display: flex;
      margin: 0;
      width: calc(100% - 30px);
      max-width: 100%;
      .discount_pct{
        float: left;
        font-size: 14px;
        line-height: 18px;
        padding: 0 4px;
        display: flex;
        margin: 0;
        align-items: center;
        border-radius: 1px;
        color: $lgreen;
        background: $green;
      }
      .discount_prices{
        display: flex;
        align-items: center;
        padding-left: 5px;
        padding-right: 5px;
        background: $black;

        .discount_original_price{
            text-decoration: line-through;
            color: $dgray;
            font-size: 11px;
            font-family: Tahoma, Arial, Helvetica, sans-serif;
            padding-right: 7px;
        }
        .discount_final_price{
            color: $mgray;
            font-size: 13px;
            font-family: Tahoma, Arial, Helvetica, sans-serif;
        }
      }
    }
  }
}
</style>
