

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue';
import About from '../views/about.vue';
import Contact from '../views/contact.vue';
import Services from '../views/services.vue';
import EP from '../views/EP.vue';
import NP from '../views/NP.vue';
import SP from '../views/sp.vue';
import WP from '../views/wp.vue';
import Kigali from '../views/Kigali.vue';
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
    path: '/EP',
    name: 'EP',
    component: EP,
  },
  {
    path: '/NP',
    name: 'NP',
    component: NP,
  },
  {
    path: '/SP',
    name: 'SP',
    component: SP,
  },
  {
    path: '/WP',
    name: 'WP',
    component: WP,
  },
  {
    path: '/Kigali',
    name: 'Kigali',
    component: Kigali,
  },
  {
    path: '/Gallery',
    name: 'Gallery',
    component: Gallery,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;