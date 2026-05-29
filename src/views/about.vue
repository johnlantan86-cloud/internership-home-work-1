<script setup>
import pic5 from '/src/assets/pic5.png'
import pic6 from '/src/assets/pic6.png'
import pic7 from '/src/assets/pic7.png'
</script>

<template>
  <section class="bg-slate-950 text-white min-h-screen py-20 px-6">
    
    <!-- TOP TITLE -->
    <div class="text-center mb-20">
      <p class="text-cyan-400 uppercase tracking-[6px] mb-4">
        About Rwanda
      </p>

      <h1 class="text-5xl font-extrabold mb-6">
        Discover Beauty & Adventure
      </h1>

      <p class="max-w-3xl mx-auto text-gray-400 text-lg leading-relaxed">
        Rwanda is known for its beautiful landscapes, clean cities,
        mountain gorillas, lakes, culture and unforgettable tourism
        experiences.
      </p>
    </div>

    <!-- SECTION 1 -->
    <div
      class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center mb-28"
    >
      <!-- IMAGE -->
      <div>
        <img
          :src="pic6"
          class="rounded-3xl shadow-2xl h-[500px] w-full object-cover"
        />
      </div>

      <!-- TEXT -->
      <div>
        <p class="text-cyan-400 uppercase tracking-[4px] mb-4">
          Nature & Peace
        </p>

        <h2 class="text-4xl font-bold mb-6">
          A Country Of Thousand Hills
        </h2>

        <p class="text-gray-400 leading-relaxed mb-6">
          Rwanda offers amazing hills, clean environments,
          beautiful weather and peaceful communities that attract
          tourists from all around the world.
        </p>

        <p class="text-gray-400 leading-relaxed mb-8">
          From Kigali city to national parks and lakes,
          visitors enjoy both adventure and relaxation.
        </p>

        <button
          class="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-full duration-300"
        >
          Learn More
        </button>
      </div>
    </div>

    <!-- SECTION 2 -->
    <div
      class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center mb-28"
    >
      <!-- TEXT -->
      <div>
        <p class="text-cyan-400 uppercase tracking-[4px] mb-4">
          Tourism
        </p>

        <h2 class="text-4xl font-bold mb-6">
          Explore Amazing Destinations
        </h2>

        <p class="text-gray-400 leading-relaxed mb-6">
          Tourists visit Rwanda for mountain gorillas,
          wildlife, cultural experiences, hotels and adventure tourism.
        </p>

        <p class="text-gray-400 leading-relaxed mb-8">
          Every destination provides a unique and unforgettable experience.
        </p>

        <button
          class="border border-white hover:bg-white hover:text-black px-6 py-3 rounded-full duration-300"
        >
          Explore Places
        </button>
      </div>

      <!-- IMAGE -->
      <div>
        <img
          :src="pic6"
          class="rounded-3xl shadow-2xl h-[500px] w-full object-cover"
        />
      </div>
    </div>

    <!-- SECTION 3 -->
    <div class="max-w-7xl mx-auto">
      <div
        class="relative rounded-3xl overflow-hidden h-[500px] flex items-center"
      >
        <!-- IMAGE -->
        <img
          :src="pic7"
          class="absolute inset-0 w-full h-full object-cover"
        />

        <!-- OVERLAY -->
        <div class="absolute inset-0 bg-black/60"></div>

        <!-- CONTENT -->
        <div class="relative z-10 max-w-3xl px-10">
          <p class="text-cyan-400 uppercase tracking-[5px] mb-4">
            Adventure Awaits
          </p>

          <h2 class="text-5xl font-extrabold mb-6">
            Experience Rwanda Like Never Before
          </h2>

          <p class="text-gray-300 text-lg leading-relaxed mb-8">
            Discover beautiful landscapes, wildlife,
            culture and unforgettable tourism adventures across Rwanda.
          </p>

          <button
            class="bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-full duration-300"
          >
            Start Journey
          </button>
        </div>
      </div>
    </div>
  </section>
</template>