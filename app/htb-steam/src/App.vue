<template>
  <div id="app">
    <div class="Hwrapper">
      <b-container class="Hcontainer">
       <tabs-bar></tabs-bar>
      </b-container>
    </div>
  </div>
</template>


<script>
import TabsBar from './components/TabsBar.vue';

export default {
  data () {
    return {
     
    }
  },
  components:{
    TabsBar:TabsBar,
  }
}
</script>

<style lang="scss">
@import 'node_modules/bootstrap/scss/bootstrap.scss';
@import 'node_modules/bootstrap-vue/src/index.scss';

.Hwrapper{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: #1b2838;
}
.Hcontainer{
  margin-top: 30px;
}
</style>
