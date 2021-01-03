<template>
  <div class="aboutParent">
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
@import '../global/variables.scss';

.aboutParent{
  padding-bottom: 30px;
}
.aboutHeader{
  font-family: "Motiva Sans", Sans-serif;
  font-weight: 300;
  font-size: 14px;
  text-transform: uppercase;
  color: $white;
  margin: 0 0 10px;
  letter-spacing: 2px;
  font-weight: normal;
  padding-top: 2px;
  position: relative;
  margin-bottom: 30px;
  &:before{
    content: '';
    display: inline-block;
    position: absolute;
    bottom: -4px;
    left: 0;
    background: $lgray;
    width: 100%;
    height: 1px;
  }
}
.contentWrap{
  color: $gray;
  font-size: 13px;
  img{
    max-width: 100%;
    display: flex!important;
    margin: 20px auto;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6{
    font-size: 20px;
    margin-top: 8px;
  }
}
</style>