import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import TroleybusSchedule from './TroleybusSchedule.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
// This imports <b-modal> as well as the v-b-modal directive as a plugin:
import { Modal } from 'bootstrap-vue/es/components';
Vue.use(Modal);

// This imports <b-card> along with all the <b-card-*> sub-components as a plugin:
import { Card } from 'bootstrap-vue/es/components';
Vue.use(Card);

// This imports directive v-b-scrollspy as a plugin:
import { Scrollspy } from 'bootstrap-vue/es/directives';
Vue.use(Scrollspy);

import { Progress } from 'bootstrap-vue/es/components';
Vue.use(Progress);

Vue.component ('app-example', TroleybusSchedule);

Vue.use(BootstrapVue);

new Vue({
  el: '#app',
  render: h => h(App)
});
