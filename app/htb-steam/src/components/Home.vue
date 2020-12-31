<template>
  <b-container class="Hcontainer">
    <div>
      <tabs-bar></tabs-bar>
      <content-tab></content-tab>
    </div>
  </b-container>
</template>

<script>
import TabsBar from './TabsBar.vue';
import ContentTab from './TabContent.vue';

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