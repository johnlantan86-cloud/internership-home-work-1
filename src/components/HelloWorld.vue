<script setup>
import { ref } from 'vue'
import viteLogo from '../assets/vite.svg'
import heroImg from '../assets/hero.png'
import vueLogo from '../assets/vue.svg'

const count = ref(0)
</script>

<template>
  <div class="min-h-screen bg-slate-900 text-white p-6">

    <!-- HEADER -->
    <div class="flex items-center gap-4 mb-8">

      <img
        src="../assets/image.png"
        alt="School Logo"
        class="w-16 h-16 rounded-full"
      />

      <h1 class="text-4xl font-bold text-cyan-400">
        SOSBLOCK
      </h1>

    </div>

    <!-- WELCOME SECTION -->
    <div class="bg-slate-800 p-6 rounded-xl shadow-lg mb-8">

      <h2 class="text-2xl font-semibold mb-4">
        Welcome to SOSBLOCK
      </h2>

      <p class="text-gray-300 leading-7">
        Welcome to SOSBLOCK school system.
        This platform helps students and teachers
        connect, learn, and manage school activities
        efficiently.
      </p>

    </div>

    <!-- TEACHER SECTION -->
    <div class="bg-slate-800 p-6 rounded-xl shadow-lg">

      <h2 class="text-2xl font-semibold mb-4">
        Teachers
      </h2>

      <table class="w-full border-collapse">

        <thead>
          <tr class="bg-cyan-600">

            <th class="p-3 text-left">
              Teacher
            </th>

            <th class="p-3 text-left">
              Subject
            </th>

          </tr>
        </thead>

        <tbody>

          <tr class="border-b border-slate-700">

            <td class="p-3">
              Mr. John
            </td>

            <td class="p-3">
              Mathematics
            </td>

          </tr>

          <tr class="border-b border-slate-700">

            <td class="p-3">
              Mrs. Alice
            </td>

            <td class="p-3">
              Computer Science
            </td>

          </tr>

        </tbody>

      </table>

    </div>

    <h1 class="text-3xl mt-8">
      HELLO SOSBLOCK
    </h1>

  </div>
</template>