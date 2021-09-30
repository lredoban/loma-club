<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-gray-100">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
      <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        <span class="block">Pour devenir membre?</span>
        <span class="block text-ocre">Remplis le formulaire d'inscription.</span>
      </h2>
      <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
        <div class="inline-flex rounded-md shadow">
          <a :href="formUrl" rel="noopener" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-ocre hover:bg-ocre">
            S'inscrire
          </a>
        </div>
        <div class="ml-3 inline-flex rounded-md shadow">
          <a href="#faq" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-ocre bg-white hover:bg-ocre hover:bg-opacity-10">
            FAQ
          </a>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
const formUrl = import.meta.env.VITE_FORM_URL
</script>