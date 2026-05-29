<script setup>
import { ref, onMounted } from 'vue'

import pic1 from '/src/assets/pic1.png'
import pic2 from '/src/assets/pic2.png'
import pic3 from '/src/assets/pic3.png'

const places = [
  {
    name: 'Kigali City',
    country: 'Rwanda',
    image: pic1,
    description: 'Beautiful modern city with amazing views.',
  },

  {
    name: 'Lake Kivu',
    country: 'Rwanda',
    image: pic2,
    description: 'Relaxing lake with beautiful beaches.',
  },

  {
    name: 'Volcanoes National Park',
    country: 'Rwanda',
    image: pic3,
    description: 'Nature, mountains and adventure.',
  },
]

const currentIndex = ref(0)

const currentPlace = ref(places[0])

function nextPlace() {
  currentIndex.value = (currentIndex.value + 1) % places.length

  currentPlace.value = places[currentIndex.value]
}

function previousPlace() {
  currentIndex.value =
    (currentIndex.value - 1 + places.length) % places.length

  currentPlace.value = places[currentIndex.value]
}

function selectPlace(place, index) {
  currentIndex.value = index

  currentPlace.value = place
}

onMounted(() => {
  setInterval(() => {
    nextPlace()
  }, 5000)
})
</script>

<template>
  <section
    class="relative h-screen bg-cover bg-center flex items-center text-white duration-700"
    :style="{ backgroundImage: `url(${currentPlace.image})` }"
  >
    <!-- DARK OVERLAY -->
    <div class="absolute inset-0 bg-black/60"></div>

    <!-- CONTENT -->
    <div
      class="relative z-10 w-full px-10 flex flex-col lg:flex-row items-center justify-between"
    >
      <!-- LEFT -->
      <div class="max-w-2xl">
        <p class="uppercase tracking-[6px] text-cyan-400 mb-4">
          Explore Rwanda
        </p>

        <h1 class="text-6xl font-extrabold mb-6">
          {{ currentPlace.name }}
        </h1>

        <p class="text-lg text-gray-300 leading-relaxed mb-8">
          {{ currentPlace.description }}
        </p>

        <div class="flex gap-4">
          <button
            class="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-full duration-300"
          >
            Explore
          </button>

          <button
            class="border border-white hover:bg-white hover:text-black px-6 py-3 rounded-full duration-300"
          >
            Learn More
          </button>
        </div>
      </div>

      <!-- RIGHT CARD -->
      <div
        class="hidden lg:block bg-white/10 backdrop-blur-lg p-6 rounded-3xl w-[320px] border border-white/20"
      >
        <img
          :src="currentPlace.image"
          class="w-full h-56 object-cover rounded-2xl mb-4"
        />

        <h2 class="text-2xl font-bold mb-2">
          {{ currentPlace.name }}
        </h2>

        <p class="text-gray-300 mb-6">
          {{ currentPlace.country }}
        </p>

        <div class="flex justify-between">
          <button
            @click="previousPlace"
            class="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full"
          >
            Prev
          </button>

          <button
            @click="nextPlace"
            class="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-full"
          >
            Next
          </button>
        </div>
      </div>
    </div>

    <!-- INDICATORS -->
    <div
      class="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10"
    >
      <div
        v-for="(place, index) in places"
        :key="index"
        @click="selectPlace(place, index)"
        class="w-4 h-4 rounded-full cursor-pointer duration-300"
        :class="
          currentIndex === index
            ? 'bg-cyan-400 scale-125'
            : 'bg-white/40'
        "
      ></div>
    </div>
  </section>
</template>