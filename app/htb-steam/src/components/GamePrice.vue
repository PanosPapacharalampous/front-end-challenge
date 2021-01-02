<template>
  <div class="game_area_purchase_game_wrapper">
		<div class="game_area_purchase_game">
			<form name="add_to_cart_401467" method="POST">
				<input type="hidden" name="snr" value="1_5_9__403">
				<input type="hidden" name="originating_snr" value="1_1452_4__104">
				<input type="hidden" name="action" value="add_to_cart">
				<input type="hidden" name="sessionid" value="55b7c08dd618c2c5f9181e73">
				<input type="hidden" name="subid" value="401467">
			</form>
			<div class="game_area_purchase_platform">
				<span v-if="platforms.windows" class="platform_img win"></span>
        <span v-if="platforms.mac" class="platform_img mac"></span>
        <span v-if="platforms.linux" class="platform_img linux"></span>
			</div>
			<h1>{{title}}</h1>
			<div v-if="priceObj" class="game_purchase_action">
				<div class="game_purchase_action_bg">
					<div class="discount_block game_purchase_discount">
						<div v-if="priceObj.discount_percent && priceObj.discount_percent > 0" class="discount_pct">-{{priceObj.discount_percent}}%</div>
						<div class="discount_prices" :class="[priceObj.final_formatted && !priceObj.initial_formatted ? 'noDiscount' : '']">
							<div v-if="priceObj.initial_formatted" class="discount_original_price">{{priceObj.initial_formatted}}</div>
							<div v-if="priceObj.final_formatted" class="discount_final_price">{{priceObj.final_formatted}}</div>
						</div>
					</div>
					<div class="btn_addtocart">
						<a class="btn_green_steamui" href="#">
							<span>Add to Cart</span>
						</a>											
					</div>
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
    priceObj:Object,
    title:String,
    platforms:Object
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
@import '../global/variables.scss';

.game_area_purchase_game_wrapper{
  margin-bottom: 28px;
  .game_area_purchase_game{
    margin-bottom: 0px;
    position: relative;
    background: $gamePurchase;
    border-radius: 4px;
    font-family: "Motiva Sans", Sans-serif;
    font-weight: normal;
    font-size: 13px;
    color: $newwhite;
    padding: 16px;
    padding-bottom: 26px;
    z-index: 1;
    h1{
      font-size: 21px;
      font-family: "Motiva Sans", Sans-serif;
      font-weight: normal;
      color: $white;
      font-weight: normal;
      margin-bottom: 2px;
    }
    .game_purchase_discount_countdown{
      margin-bottom: 8px;
      color: $skyblue;
    }
    .game_area_purchase_platform{
      float: right;
      .platform_img{
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
    }
    .game_purchase_action{
      position: absolute;
      right: 16px;
      bottom: -17px;
      left: 16px;
      white-space: nowrap;
      text-align: right;
      display: flex;
      justify-content: flex-end;
      .game_purchase_action_bg{
        height: auto;
        vertical-align: bottom;
        display: flex;
        align-items: center;
        background-color: $black;
        padding: 2px 2px 2px 0px;
        border-radius: 2px;
        -moz-border-radius: 2px;
        white-space: nowrap;
        font-size: 0;
        .discount_block {
          position: relative;
        }
        >*{
          font-size: 12px;
          display: inline-block;
          margin-left: 2px;
          vertical-align: middle;
        }
        .game_purchase_discount{
          height: 34px;
          overflow: hidden;
          .discount_pct{
            display: inline-block;
            height: 36px;
            line-height: 32px;
            font-size: 25px;
            text-align: center;
            overflow: hidden;
            padding: 0 6px;
            color: $lgreen;
            background: $green;
          }
          .discount_prices{
            display: inline-block;
            position: relative;
            vertical-align: top;
            text-align: right;
            background: $black;
            .discount_original_price{
              position: absolute;
              left: auto;
              right: 6px;
              top: 0px;
              font-size: 11px;
              text-decoration: line-through;
              color: $dgray;
              font-family: Tahoma, Arial, Helvetica, sans-serif;
            }
            .discount_final_price{
              padding-left: 8px;
              padding-top: 12px;
              padding-right: 6px;
              font-size: 14px;
              color: $skblue2;
              &.nopadds{
                padding-top: 7px;
              }
            }
            &.noDiscount{
              display: flex;
              height: 100%;
              .discount_final_price{
                padding-top: 0px;
                padding-bottom: 0px;
                display: flex;
                height: 100%;
                align-items: center;
              }
            }
          }
        }
        .btn_addtocart{
          position: relative;
          .btn_green_steamui{
            border-radius: 2px;
            border: none;
            padding: 1px;
            display: inline-block;
            cursor: pointer;
            text-decoration: none !important;
            color: $gwhite;
            background: transparent;
            text-shadow: 1px 1px 0px $lightBlueBack;
            &:hover{
              text-decoration: none !important;
              color: $white;
              background: transparent;
              span{
                background: $lgreen2;
                background: $greeNlinearB;
                background: $greenLinearR;
              }
            }

            span{
              border-radius: 2px;
              display: block;
              background: $greenyel;
              background: $cardlinearB;
              background: $cardLinearR;
              padding: 0 15px;
              font-size: 15px;
              line-height: 30px;
            }
          }
        }
      }
    }
  }
}
</style>