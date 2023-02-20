<script setup>
import { computed } from 'vue-demi'
import useStoryblok from '../storyblok'

const { story, resolver } = useStoryblok('a-propos')
const histoire = computed(() => resolver.render(story.value?.histoire))
const josepha = computed(() => resolver.render(story.value?.texteJosepha))
</script>


<template>
  <main class="relative px-4 py-12 sm:px-6 lg:px-8">
      <div class="text-lg max-w-prose mx-auto">
        <h1 class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">L’histoire du Loma Club</h1>
      </div>
      <div v-if="story" class="mt-6 prose prose-yellow prose-lg text-gray-700 mx-auto">
        <div v-html="histoire"></div>
        <h2 class="!mt-20 text-center">Qui est Josépha ?</h2>
        <div class="lg:grid lg:gap-x-12 lg:grid-rows-1 lg:grid-cols-5 lg:grid-flow-row-dense">
          <div class="relative aspect-w-16 aspect-h-9 md:aspect-h-6 lg:row-start-1 lg:col-start-1 lg:col-span-2">
            <img class="absolute !m-0 inset-0 object-cover object-center rounded-lg" :src="story.imageJosepha.filename" alt="Josépha Raphard créatrice du Loma club" width="1310" height="873" />
          </div>
          <div class="lg:row-start-1 lg:col-start-3 lg:col-span-3" v-html="josepha"></div>
        </div>
        <h2 class="!mt-24 text-center">Méres, la puissance de l'armée</h2>
        <div class="md:w-1/2 mx-auto">
          <a href="https://www.leslibraires.fr/livre/21693817-meres-la-puissance-de-l-armee-pacifique-josepha-raphard-hachette-pratique " target="_blank" rel="noopener noreferrer">
            <img class="" :src="story.imageMeres.filename"
              alt="Josépha Raphard créatrice du Loma club" width="1310" height="873" />
          </a>
        </div>
        <h2 class="!mt-24 text-center">Meufs & Méres</h2>
        <p class="!mb-1">{{ story.caption1 }}</p>
        <div class="mx-auto aspect-w-16 aspect-h-9 bg-pink-500">
          <iframe src="https://www.youtube-nocookie.com/embed/6cyUCrBavpw?start=174s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <p class="!mb-1">{{ story.caption2 }}</p>
        <div class="mx-auto aspect-w-16 aspect-h-9 bg-pink-500">
          <iframe class="mx-auto" src="https://www.youtube-nocookie.com/embed/UhDdx38Mk9k?start=5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
  </main>
</template>
