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
				<span class="platform_img win"></span>
			</div>
			<h1>Buy Sea of Thieves</h1>
			<p class="game_purchase_discount_countdown">SPECIAL PROMOTION! Offer ends 5 January</p>								
			<div class="game_purchase_action">
				<div class="game_purchase_action_bg">
					<div class="discount_block game_purchase_discount">
						<div class="discount_pct">-50%</div>
						<div class="discount_prices">
							<div class="discount_original_price">39,99€</div>
							<div class="discount_final_price">19,99€</div>
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
  mounted() {

  },
  methods:{
  },
  components:{

  }
}
</script>

<style lang="scss" scoped>
.game_area_purchase_game_wrapper{
  margin-bottom: 28px;
  .game_area_purchase_game{
    margin-bottom: 0px;
    position: relative;
    background: -webkit-linear-gradient( 150deg, rgba(226,244,255,0.3) 5%,rgba(84, 107, 115, 0.3) 95%);
    background: linear-gradient( -60deg, rgba(226,244,255,0.3) 5%,rgba(84, 107, 115, 0.3) 95%);
    border-radius: 4px;
    font-family: "Motiva Sans", Sans-serif;
    font-weight: normal;
    font-size: 13px;
    color: #c6d4df;
    padding: 16px;
    padding-bottom: 26px;
    z-index: 1;
    h1{
      font-size: 21px;
      font-family: "Motiva Sans", Sans-serif;
      font-weight: normal;
      color: #ffffff;
      font-weight: normal;
      margin-bottom: 2px;
    }
    .game_purchase_discount_countdown{
      margin-bottom: 8px;
      color: #7cb8e4;
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
        background-color: #000000;
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
            color: #a4d007;
            background: #4c6b22;
          }
          .discount_prices{
            display: inline-block;
            position: relative;
            vertical-align: top;
            text-align: right;
            background: #000000;
            .discount_original_price{
              position: absolute;
              left: auto;
              right: 6px;
              top: 0px;
              font-size: 11px;
              text-decoration: line-through;
              color: #626366;
              font-family: Tahoma, Arial, Helvetica, sans-serif;
            }
            .discount_final_price{
              padding-left: 8px;
              padding-top: 12px;
              padding-right: 6px;
              font-size: 14px;
              color: #acdbf5;
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
            color: #d2efa9;
            background: transparent;
            text-shadow: 1px 1px 0px rgba( 0, 0, 0, 0.3 );
            &:hover{
              text-decoration: none !important;
              color: #fff;
              background: transparent;
              span{
                background: #8ed629;
                background: -webkit-linear-gradient( top, #8ed629 5%, #6aa621 95%);
                background: linear-gradient( to bottom, #8ed629 5%, #6aa621 95%);
                background: linear-gradient( to right, #8ed629 5%, #6aa621 95%);
              }
            }

            span{
              border-radius: 2px;
              display: block;
              background: #6fa720;
              background: -webkit-linear-gradient( top, #6fa720 5%, #588a1b 95%);
              background: linear-gradient( to bottom, #6fa720 5%, #588a1b 95%);
              background: linear-gradient( to right, #75b022 5%, #588a1b 95%);
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