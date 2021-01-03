<template>
  <div class="tabbar_ctn">
    <div class="store_horizontal_minislider_ctn">
      <div class="tabbar store_horizontal_minislider">
          <single-tab @click.native="activeTab=1" title="New and Trending" :activeTab="activeTab" index="1"></single-tab>
          <single-tab @click.native="activeTab=2" title="Top Sellers" :activeTab="activeTab" index="2"></single-tab>
          <single-tab @click.native="activeTab=3" title="What's Being Played" :activeTab="activeTab" index="3"></single-tab>
          <single-tab @click.native="activeTab=4" title="Upcoming" :activeTab="activeTab" index="4"></single-tab>
      </div>
    </div>
  </div>
</template>

<script>
import SingleTab from './SingleTab.vue';

export default {
  data () {
    return {
     activeTab: this.$store.getters.getActiveTab
    }
  },
  components:{
      SingleTab:SingleTab
  },
  methods:{
   
  },
  watch:{
    activeTab:function(){
      this.$store.dispatch('changeTab',this.activeTab)
    }
  }
}
</script>

<style lang="scss">
@import '../global/variables.scss';

.tabbar_ctn{
  box-shadow: 0 5px 0 -1px $activeStabgreen;
  margin-bottom: 9px;
  .store_horizontal_minislider_ctn{
    height: 30px !important;
    position: relative;
    overflow: hidden;
    .tabbar.store_horizontal_minislider{
      white-space: nowrap;
      overflow-x: auto;
      overflow-y: hidden;
    }
  }
}
</style>