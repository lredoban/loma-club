<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-gray-100">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
      <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        <span class="block">{{ story.CTA1 }}</span>
        <span class="block text-ocre">{{ story.CTA2 }}</span>
      </h2>
      <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
        <form class="mt-8 sm:flex" data-netlify="true" action="/success" name="newsletter" data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="newsletter" />
          <label for="email-address" class="sr-only">Email address</label>
          <input id="email-address" name="email" type="email" autocomplete="email" required
            class="w-full rounded-md border-gray-300 px-5 py-3 placeholder-gray-500 focus:border-ocre-500 focus:ring-ocre-500 sm:max-w-xs"
            placeholder="Ton email">
          <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
            <button type="submit"
              class="flex w-full items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-ocre hover:bg-ocre focus:outline-none focus:ring-2 focus:ring-ocre-500 focus:ring-offset-2">
              S'inscrire</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>


<script setup>
import { toRef } from 'vue'
const props = defineProps({ story: Object })
const story = toRef(props, 'story')
</script>
