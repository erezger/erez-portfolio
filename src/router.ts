import Vue from 'vue';
import VueRouter from 'vue-router';
import LibraryComponent from '@/views/library/library.component';
import ItemComponent from '@/views/item/item.component';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/library',
      name: 'library',
      component: LibraryComponent,
    },
    {
      path: '/library/:imdbId',
      name: 'item',
      component: ItemComponent,
      props: true,
    },
    {
      path: '*',
      redirect: '/library',
    },
  ],
});
