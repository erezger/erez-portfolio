import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeComponent from '@/views/home/home.component.vue';
import AboutComponent from '@/views/about/about.component';
import PortfolioComponent from '@/views/portfolio/portfolio.component';
import ContactComponent from '@/views/contact/contact.component';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeComponent,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutComponent,
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: PortfolioComponent,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactComponent,
    },
    {
      path: '*',
      redirect: '/home',
    },
  ],
});
