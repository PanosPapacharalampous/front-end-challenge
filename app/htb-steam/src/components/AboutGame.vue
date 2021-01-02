<template>
  <div>
    <h2 class="aboutHeader">About this game</h2>
    <div v-html="aboutGame" class="contentWrap"></div>
  </div>
</template>

<script>
export default {
  props:{
    aboutGame:String
  }
}
</script>

<style lang="scss">
  .aboutHeader{
    font-family: "Motiva Sans", Sans-serif;
    font-weight: 300;
    font-size: 14px;
    text-transform: uppercase;
    color: #fff;
    margin: 0 0 10px;
    letter-spacing: 2px;
    font-weight: normal;
    padding-top: 2px;
    position: relative;
    &:before{
      content: '';
      display: inline-block;
      position: absolute;
      bottom: -4px;
      left: 0;
      background: #8f98a0;
      width: 100%;
      height: 1px;
    }
  }
  .contentWrap{
    color: #acb2b8;
    img{
      max-width: 100%;
      display: flex!important;
      margin: 0 auto;
    }
  }
</style>