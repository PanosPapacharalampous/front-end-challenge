<template>
  <div id="app">
    <div class="Hwrapper">
       <router-view></router-view>
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
@import 'node_modules/bootstrap/scss/bootstrap.scss';
@import 'node_modules/bootstrap-vue/src/index.scss';
@import './global/variables.scss';

body{
 font-family: Arial, Helvetica, sans-serif;
}
.pt30{
  padding-top: 30px;
}
a{
  &:hover{
    text-decoration: none;
  }
}
.Hwrapper{
    width: 100%;
    height: 100%;
    background: $mainBcolor;
    min-height: 100vh;
}
.Hcontainer{
  padding-top: 30px;
  padding-bottom: 30px;
}
</style>
