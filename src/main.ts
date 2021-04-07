import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import i18n from './lang/lang';
import '@/globals/filters';

import '@/assets/scss/index.scss';
import '@/assets/css/index.css';
import '@/js/jquery.min.js';
import '@/js/particles.js';
import '@/js/particles.min.js';
import '@/js/index.js';
import Notifications from 'vue-notification';

Vue.use(Notifications);

Vue.config.productionTip = false;

const eventsHub = new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');

export {eventsHub};
