<template>
  <div class="tab_content_ctn_parent">
    <input type="text" v-model="name" placeholder="Filter By Name"/>
    <single-content :results="filterTrending" :class="[selectedTab === 1 ? 'active': '']"></single-content>
    <single-content :results="filterSellers" :class="[selectedTab === 2 ? 'active': '']"></single-content>
    <single-content :results="filterPlayed" :class="[selectedTab === 3 ? 'active': '']"></single-content>
    <single-content :results="filterUpcoming" :class="[selectedTab === 4 ? 'active': '']"></single-content>
  </div>
</template>

<script>
import SingleContent from './SingleContent.vue'
import axios from 'axios';

export default {
  data () {
    return {
      trending:[],
      topSellers:[],
      played:[],
      upcoming:[],
      activeTab: this.$store.getters.getActiveTab,
      name:''
    }
  },
  components:{
    SingleContent:SingleContent,
  },
  computed:{
    selectedTab(){
      return this.$store.getters.getActiveTab
    },
    filterTrending(){
      return this.trending.filter(trend=> !trend.name.indexOf(this.name) || !trend.name.toLowerCase().indexOf(this.name.toLowerCase()))
    },
    filterSellers(){
      return this.topSellers.filter(trend=> !trend.name.indexOf(this.name) || !trend.name.toLowerCase().indexOf(this.name.toLowerCase()))
    },
    filterPlayed(){
      return this.played.filter(trend=> !trend.name.indexOf(this.name) || !trend.name.toLowerCase().indexOf(this.name.toLowerCase()))
    },
    filterUpcoming(){
      return this.upcoming.filter(trend=> !trend.name.indexOf(this.name) || !trend.name.toLowerCase().indexOf(this.name.toLowerCase()))
    },
  },
  mounted(){
    axios.get(`https://htb-steam-api.vercel.app/api/apps?tab=new_and_trending`)
    .then(response => {
      this.trending = response.data;
    })
    .catch(e => {
      this.errors.push(e)
    });
    axios.get(`https://htb-steam-api.vercel.app/api/apps?tab=top_sellers`)
    .then(response => {
      this.topSellers = response.data;
    })
    .catch(e => {
      this.errors.push(e)
    });
    axios.get(`https://htb-steam-api.vercel.app/api/apps?tab=being_played`)
    .then(response => {
      this.played = response.data;
    })
    .catch(e => {
      this.errors.push(e)
    });
    axios.get(`https://htb-steam-api.vercel.app/api/apps?tab=upcoming`)
    .then(response => {
      this.upcoming = response.data;
    })
    .catch(e => {
      this.errors.push(e)
    });
  }
  
}
</script>

<style lang="scss">
@import '../global/variables.scss';

input{
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  background-color: $backgroundB;
  color: $white;
  border: none;
  &:focus{
    outline: none;
  }
}
</style>

