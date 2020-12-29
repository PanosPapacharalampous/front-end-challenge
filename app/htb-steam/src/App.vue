<template>
  <div id="app">
    <div class="Hwrapper">
      <b-container class="Hcontainer">
       <tabs-bar></tabs-bar>
       <content-tab></content-tab>
      </b-container>
    </div>
  </div>
</template>


<script>
import TabsBar from './components/TabsBar.vue';
import ContentTab from './components/TabContent.vue';

export default {
  data () {
    return {
     
    }
  },
  components:{
    TabsBar:TabsBar,
    ContentTab:ContentTab
  }
}
</script>

<style lang="scss">
@import 'node_modules/bootstrap/scss/bootstrap.scss';
@import 'node_modules/bootstrap-vue/src/index.scss';

body{
 font-family: Arial, Helvetica, sans-serif;
}
a{
  &:hover{
    text-decoration: none;
  }
}
.Hwrapper{
    width: 100%;
    height: 100%;
    background: #1b2838;
    min-height: 100vh;
}
.Hcontainer{
  padding-top: 30px;
  padding-bottom: 30px;
}
</style>
