<script setup>
import { ref } from 'vue'
import logo from '../assets/pic1.png'

const showDestinationDropdown = ref(false)
const showGalleryDropdown = ref(false)
const showLanguageDropdown = ref(false)
</script>

<template>
  <nav
    class="bg-green-800 text-white px-8 py-4 shadow-lg flex items-center justify-between relative"
  >

    <!-- LOGO -->
    <div class="flex items-center gap-3">
      <img
        :src="logo"
        alt="Visit Rwanda Logo"
        class="w-12 h-12 rounded-full object-cover border-2 border-white"
      />

      <h1 class="text-2xl font-bold text-yellow-300 tracking-wide">
        TEMBERURWANDA
      </h1>
    </div>

    <!-- NAVIGATION -->
    <ul class="flex items-center gap-8 text-sm font-medium">

      <!-- HOME -->
      <li>
        <RouterLink
          to="/"
          class="hover:text-yellow-300 duration-300"
        >
          Home
        </RouterLink>
      </li>

      <!-- ABOUT -->
      <li>
        <RouterLink
          to="/about"
          class="hover:text-yellow-300 duration-300"
        >
          About
        </RouterLink>
      </li>

      <!-- SERVICES -->
      <li>
        <RouterLink
          to="/services"
          class="hover:text-yellow-300 duration-300"
        >
          Services
        </RouterLink>
      </li>

      <!-- GALLERY -->
      <li
        class="relative"
        @mouseenter="showGalleryDropdown = true"
        @mouseleave="showGalleryDropdown = false"
      >

        <button
          class="hover:text-yellow-300 duration-300 flex items-center gap-2"
        >
          Gallery

          <span
            :class="showGalleryDropdown ? 'rotate-180' : ''"
            class="duration-300 inline-block"
          >
            ▼
          </span>
        </button>

        <!-- GALLERY DROPDOWN -->
        <transition
          enter-active-class="transition duration-300 ease-out"
          enter-from-class="opacity-0 translate-y-2"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition duration-200 ease-in"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 translate-y-2"
        >

          <ul
            v-if="showGalleryDropdown"
            class="absolute left-0 top-10 bg-white text-black rounded-2xl shadow-2xl w-56 overflow-hidden z-50"
          >

            <li>
              <button
                class="w-full text-left px-5 py-4 hover:bg-green-100 duration-300"
              >
                Photos
              </button>
            </li>

            <li>
              <button
                class="w-full text-left px-5 py-4 hover:bg-green-100 duration-300"
              >
                Videos
              </button>
            </li>

          </ul>

        </transition>
      </li>

      <!-- DESTINATIONS -->
      <li
        class="relative"
        @mouseenter="showDestinationDropdown = true"
        @mouseleave="showDestinationDropdown = false"
      >

        <button
          class="hover:text-yellow-300 duration-300 flex items-center gap-2"
        >
          Destinations

          <span
            :class="showDestinationDropdown ? 'rotate-180' : ''"
            class="duration-300 inline-block"
          >
            ▼
          </span>
        </button>

        <!-- DESTINATION DROPDOWN -->
        <transition
          enter-active-class="transition duration-300 ease-out"
          enter-from-class="opacity-0 translate-y-2"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition duration-200 ease-in"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 translate-y-2"
        >

          <ul
            v-if="showDestinationDropdown"
            class="absolute left-0 top-10 bg-white text-black rounded-2xl shadow-2xl w-64 overflow-hidden z-50"
          >

            <li>
              <RouterLink
                to="/kigali"
                class="block px-5 py-4 hover:bg-green-100 duration-300"
              >
                Kigali City
              </RouterLink>
            </li>

            <li>
              <RouterLink
                to="/np"
                class="block px-5 py-4 hover:bg-green-100 duration-300"
              >
                Northern Province
              </RouterLink>
            </li>

            <li>
              <RouterLink
                to="/sp"
                class="block px-5 py-4 hover:bg-green-100 duration-300"
              >
                Southern Province
              </RouterLink>
            </li>

            <li>
              <RouterLink
                to="/ep"
                class="block px-5 py-4 hover:bg-green-100 duration-300"
              >
                Eastern Province
              </RouterLink>
            </li>

            <li>
              <RouterLink
                to="/wp"
                class="block px-5 py-4 hover:bg-green-100 duration-300"
              >
                Western Province
              </RouterLink>
            </li>

          </ul>

        </transition>
      </li>

      <!-- CONTACT -->
      <li>
        <RouterLink
          to="/contact"
          class="hover:text-yellow-300 duration-300"
        >
          Contact
        </RouterLink>
      </li>

    </ul>
    <!-- LANGUAGES -->
<li
  class="relative"
  @mouseenter="showLanguageDropdown = true"
  @mouseleave="showLanguageDropdown = false"
>

  <button
    class="hover:text-yellow-300 duration-300 flex items-center gap-2"
  >
    Languages

    <span
      :class="showLanguageDropdown ? 'rotate-180' : ''"
      class="duration-300 inline-block"
    >
      ▼
    </span>
  </button>

  <!-- LANGUAGE DROPDOWN -->
  <transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0 translate-y-2"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-2"
  >

    <ul
      v-if="showLanguageDropdown"
      class="absolute right-0 top-10 bg-white text-black rounded-2xl shadow-2xl w-56 overflow-hidden z-50"
    >

      <li>
        <button
          class="w-full text-left px-5 py-4 hover:bg-green-100 duration-300"
        >
          English
        </button>
      </li>

      <li>
        <button
          class="w-full text-left px-5 py-4 hover:bg-green-100 duration-300"
        >
          Kinyarwanda
        </button>
      </li>

      <li>
        <button
          class="w-full text-left px-5 py-4 hover:bg-green-100 duration-300"
        >
          Français
        </button>
      </li>

      <li>
        <button
          class="w-full text-left px-5 py-4 hover:bg-green-100 duration-300"
        >
          Kiswahili
        </button>
      </li>

    </ul>

  </transition>
</li>

  </nav>
</template>