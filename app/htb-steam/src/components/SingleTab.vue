<template>
    <div class="tab tab_filler active">
        <div class="tab_content active">
            New and Trending
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
     
    }
  }
}
</script>

<style lang="scss">

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
            color: #4f94bc;
            line-height: 25px;
            padding: 0 10px;
            cursor: pointer;
            vertical-align: top;
            background: transparent;
            box-shadow: none;

            &.active{
                line-height: 29px;
                font-size: 14px;
                color: #ffffff;
                background: #214b6b;
                text-shadow: -1px -1px rgba( 0, 0, 0, 0.25 );
                cursor: default;
                box-shadow: none;
            }
        }
    }


</style>