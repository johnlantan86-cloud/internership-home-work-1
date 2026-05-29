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
    class="relative h-screen bg-cover bg-center flex items-center justify-center text-white duration-700"
    :style="{ backgroundImage: `url(${currentPlace.image})` }"
  >
    <!-- DARK OVERLAY -->
    <div class="absolute inset-0 bg-black/60"></div>

    <!-- CONTENT -->
    <div
      class="relative z-10 w-full h-full flex flex-col justify-center items-center text-center px-6"
    >
      <div class="max-w-4xl mx-auto flex flex-col items-center">
        
        <p class="uppercase tracking-[8px] text-cyan-400 mb-6 text-sm md:text-base">
          Explore Rwanda
        </p>

        <h1
          class="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
        >
          {{ currentPlace.name }}
        </h1>

        <p
          class="text-lg md:text-2xl text-gray-300 leading-relaxed mb-10 max-w-2xl"
        >
          {{ currentPlace.description }}
        </p>

        <!-- BUTTONS -->
        <div class="flex flex-wrap justify-center gap-5">
          
          <button
            class="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-full duration-300 text-lg font-semibold"
          >
            Explore
          </button>

          <button
            class="border border-white hover:bg-white hover:text-black px-8 py-4 rounded-full duration-300 text-lg font-semibold"
          >
            Learn More
          </button>

        </div>
      </div>
    </div>

    <!-- SLIDER CONTROLS -->
    <div
      class="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-4 z-10"
    >
      <button
        @click="previousPlace"
        class="bg-white/20 hover:bg-white/30 px-5 py-2 rounded-full backdrop-blur-md"
      >
        Prev
      </button>

      <button
        @click="nextPlace"
        class="bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-full"
      >
        Next
      </button>
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