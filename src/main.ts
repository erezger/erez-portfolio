import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import i18n from './lang/lang';
import '@/globals/filters';

import '@/assets/scss/index.scss';
import Notifications from 'vue-notification';
import ListView from '@/components/list-view.vue';
import LibraryItem from '@/components/library-item.vue';
import GroupedList from '@/components/grouped-list.vue';
import CoolBtn from '@/components/cool-btn.vue';
import GridView from '@/components/grid-view.vue';

Vue.component('list-view', ListView);
Vue.component('grid-view', GridView);
Vue.component('library-item', LibraryItem);
Vue.component('grouped-list', GroupedList);
Vue.component('cool-btn', CoolBtn);

Vue.use(Notifications);

Vue.config.productionTip = false;

const eventsHub = new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');

export {eventsHub};
