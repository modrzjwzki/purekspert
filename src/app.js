import Vue from 'vue';
require('./bootstrap');
import './assets/css/styles.css';
import 'leaflet/dist/leaflet.css';
import { Icon }  from 'leaflet'
import pin from './assets/img/pin.png'
import pinx2 from './assets/img/pin-x2.png'
import pinshadow from './assets/img/pin-shadow.png'


// this part resolve an issue where the markers would not appear
delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
  iconRetinaUrl: pinx2,
  iconUrl: pin,
  shadowUrl: pinshadow
});

import router from './router';
import App from './App.vue';
import store from './store';
import * as types from './store/mutation-types';


new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
  created() {
    this.$store.commit(types.RESET_LOADING_PROGRESS);
    this.$store.dispatch('getAllCategories');
    this.$store.dispatch('getAllPages');
    this.$store.dispatch('getAllMenus')
  },
});
