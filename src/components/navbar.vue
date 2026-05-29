<script setup>
import logo from '../assets/pic1.png'
</script>

<template>
  <nav class="bg-green-800 text-white flex justify-between py-4 px-3 items-center shadow-lg">

    <span class="text-xl font-bold flex gap-2 items-center">
      <img :src="logo" alt="TR" class="w-10 h-10 rounded-full">
    </span>

    <ul class="flex gap-8 text-sm font-medium">
      <li><a href="/Home" class="hover:text-yellow-300">Home</a></li>
      <li><a href="/About" class="hover:text-yellow-300">About Us</a></li>
      <li><a href="/Services" class="hover:text-yellow-300">Services</a></li>
      <li><a href="/Contact" class="hover:text-yellow-300">Contact</a></li>
    </ul>

  </nav>
</template>