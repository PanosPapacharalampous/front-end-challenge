<template>
    <div class="tab tab_filler" :class="[index == activeTab ? 'active' : '']">
        <div class="tab_content" :class="[index == activeTab ? 'active' : '']">
            {{this.title}}
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
     
    }
  },
  props:{
    title:String,
    activeTab:Number,
    index:String
  }
}
</script>

<style lang="scss">
@import '../global/variables.scss';

.tab.tab_filler{
	display: inline-block;
	margin-right: 0px;
	border-top-left-radius: 3px;
	border-top-right-radius: 3px;
	margin-top: 3px;
	padding: 1px;

	&.active{
		background: none;
		height: 26px;
		margin-bottom: -1px;
	}

	.tab_content{
		border-top-left-radius: 3px;
		border-top-right-radius: 3px;
		font-size: 13px;
		color: $stabblue;
		line-height: 25px;
		padding: 0 10px;
		cursor: pointer;
		vertical-align: top;
		background: transparent;
		box-shadow: none;

		&.active{
			line-height: 29px;
			font-size: 14px;
			color: $white;
			background: $activeStabgreen;
			text-shadow: -1px -1px $blackithOp;
			cursor: default;
			box-shadow: none;
		}
		&:hover{
			color: $white;
		}
	}
}
</style>