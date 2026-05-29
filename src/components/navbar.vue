<script setup>
import logo from '../assets/pic1.png'
</script>

<template>
  <nav
    class="bg-green-800 text-white flex justify-between items-center px-6 py-4 shadow-lg"
  >
    
    <!-- LOGO -->
    <div class="flex items-center gap-3">
      <img
        :src="logo"
        alt="Logo"
        class="w-12 h-12 rounded-full object-cover"
      />

      <h1 class="text-2xl font-bold text-yellow-300">
        TEMBERURWANDA
      </h1>
    </div>

    <!-- NAV LINKS -->
    <ul class="flex gap-8 text-sm font-medium">

      <li>
        <RouterLink
          to="/"
          class="hover:text-yellow-300 duration-300"
        >
          Home
        </RouterLink>
      </li>

      <li>
        <RouterLink
          to="/about"
          class="hover:text-yellow-300 duration-300"
        >
          About
        </RouterLink>
      </li>

      <li>
        <RouterLink
          to="/services"
          class="hover:text-yellow-300 duration-300"
        >
          Services
        </RouterLink>
      </li>

      <li>
        <RouterLink
          to="/gallery"
          class="hover:text-yellow-300 duration-300"
        >
          Gallery
        </RouterLink>
      </li>

      <li>
        <RouterLink
          to="/contact"
          class="hover:text-yellow-300 duration-300"
        >
          Contact
        </RouterLink>
      </li>

    </ul>

  </nav>
</template>