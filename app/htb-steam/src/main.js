import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'


const router = new VueRouter({
  mode: 'history',
  routes: [
    { path:'/', component: App },
  ]
});

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueRouter);

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
