<template>
  <div id="app">
    <div class="Hwrapper">
      <b-container>
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

</style>
