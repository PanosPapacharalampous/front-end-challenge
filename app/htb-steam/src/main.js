import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import { BootstrapVue, IconsPlugin, BootstrapVueIcons } from 'bootstrap-vue'
import Game from './Gamepage.vue'
import Home from './components/Home.vue'
import { store } from './store/store'

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path:'', component: Home, name:'home' },
    { path:'/game/:id', component:Game, name: 'game'}
  ]
});

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueRouter);
Vue.use(BootstrapVueIcons)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
