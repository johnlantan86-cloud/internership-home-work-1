

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';
import Services from '../views/Services.vue';
import EP from '../views/EP.vue';
import NP from '../views/NP.vue';
import SP from '../views/SP.vue';
import WP from '../views/WP.vue';
import Kigali from '../views/Kigali.vue';
import Gallery from '../views/Gallery.vue';

const routes = [
  {
    path: '/Home',
    name: 'home',
    component: Home,
  },

  {
    path: '/About',
    name: 'about',
    component: About,
  },
  {
    path: '/Contact',
    name: 'contact',
    component: Contact,
  },
  {
    path: '/Services',
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