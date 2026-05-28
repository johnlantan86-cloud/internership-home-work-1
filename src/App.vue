<script setup>
import Navbar from './components/navbar.vue';
import router from './router/index.js';

import Footer from './components/footer.vue';
</script>

<template>
  <Navbar />
  <RouterView />
  <Footer />
</template>
