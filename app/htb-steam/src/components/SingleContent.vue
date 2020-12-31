<template>
  <div class="linksWrapper">
    <router-link v-for="(value,index) in results.slice(0,10)" :key="index" :to="{name:'game', params:{id:value.appid}}" class="tab_item">
      <div class="tab_item_cap">
        <img class="tab_item_cap_img" :src="value.header_image">
      </div>
      <div class="discount_block tab_item_discount">
        <div v-if="value.price_overview && value.price_overview.discount_percent > 0" class="discount_pct">- {{value.price_overview.discount_percent}}%</div>
        <div  v-if="value.price_overview" class="discount_prices">
          <div class="discount_original_price">{{value.price_overview.initial_formatted}}</div>
          <div class="discount_final_price">{{value.price_overview.final_formatted}}</div>
        </div>
      </div>
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
.tab_content_ctn_parent{
  .linksWrapper{
    display: none;
    &.active{
      display: block;
    }
     .tab_item{
        position: relative;
        display: block;
        background: #202d39;
        background: rgba( 0, 0, 0, 0.2 );
        height: 69px;
        margin-bottom: 5px;
        padding-left: 198px;
        text-size-adjust: none;
        -webkit-text-size-adjust: none;

        .tab_item_cap{
          width: 184px;
          position: absolute;
          left: 0;
          top: 0;
          z-index: 3;
          line-height: 69px;
          transition: opacity 0.25s;
          height: 69px;
          overflow: hidden;

          img{
            vertical-align: middle;
            border-style: none;
            object-fit: cover;
            height: 100%;
            width: 100%;
          }
        }
        &:hover{
          background:rgba( 0, 0, 0, 0.4 );
        }
    }
    .tab_item_discount{
        display: block;
        float: right;
        margin-right: 16px;
        background: none;
        margin-top: 23px;
        width: 120px;
        text-align: right;
        .discount_pct{
            display: block;
            float: left;
            font-size: 14px;
            line-height: 18px;
            padding: 0 4px;
            margin-top: 8px;
            border-radius: 1px;
            color: #a4d007;
            background: #4c6b22;
        }
        .discount_prices{
            background: transparent;
            display: inline-block;
            vertical-align: bottom;
            text-align: right;

            .discount_original_price{
                text-decoration: line-through;
                color: #626366;
                font-size: 11px;
                font-family: Tahoma, Arial, Helvetica, sans-serif;
            }
            .discount_final_price{
                color: #9099a1;
                font-size: 13px;
                font-family: Tahoma, Arial, Helvetica, sans-serif;
            }
        }
    }
    .tab_item_content{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding-top: 6px;
        font-size: 12px;
        .tab_item_name{
            color: #c7d5e0;
            font-size: 1.25em;
            line-height: 18px;
            text-overflow: ellipsis;
            white-space: nowrap;
            display: block;
            overflow: hidden;
            transition: color 0.25s;
        }
        .tab_item_details{
            color: #384959;
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
                height: 20px;
                white-space: normal;
                overflow: hidden;
                .top_tag{
                    white-space: nowrap;
                    font-size: 12px;
                }
            }
        }
    }
  }
}
</style>
