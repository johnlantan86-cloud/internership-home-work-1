

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue';
import About from '../views/about.vue';
import Contact from '../views/contact.vue';
import Services from '../views/services.vue';
import EP from '../views/ep.vue';
import NP from '../views/np.vue';
import SP from '../views/sp.vue';
import WP from '../views/wp.vue';
import Kigali from '../views/kigali.vue';
import Gallery from '../views/gallery.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },

  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
  },
  {
    path: '/services',
    name: 'services',
    component: Services,
  },

  {
    path: '/ep',
    name: 'EP',
    component: EP,
  },
  {
    path: '/np',
    name: 'NP',
    component: NP,
  },
  {
    path: '/sp',
    name: 'SP',
    component: SP,
  },
  {
    path: '/wp',
    name: 'WP',
    component: WP,
  },
  {
    path: '/kigali',
    name: 'Kigali',
    component: Kigali,
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;