<template>
  <div class="bg-gray-100">
    <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
      <div class="space-y-12">
        <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">Témoignages</h2>

        <ul role="list" class="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0">
          <li class="group" v-for="{ Nom, Enfants, Inscription, Image, Citation } in cleanedTemoignages" :key="Nom">
            <div class="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
              <div class="relative h-0 aspect-w-3 aspect-h-2 rounded-lg shadow-lg overflow-hidden sm:aspect-w-3 sm:aspect-h-4">
                <img class="object-cover object-top transition duration-500 grayscale sm:object-center group-hover:scale-110" :src="Image.filename" :alt="Image.alt" />
                <div class="absolute inset-0 bg-creme mix-blend-multiply opacity-40"></div>
              </div>
              <div class="sm:col-span-2">
                <div class="space-y-4">
                  <div class="text-lg leading-none font-medium space-y-1">
                    <h3 class="text-2xl">{{ Nom }}</h3>
                    <p class="text-ocre">{{ Enfants }}</p>
                    <p class="text-ocre font-light">{{ Inscription }}</p>
                  </div>
                  <div>
                    <p class="pl-4 text-gray-800 relative italic before:absolute before:top-0 before:left-0 before:-ml-7 before:-mt-3 before:text-9xl before:text-ocre before:font-virtual before:content-quote" v-html="Citation"></p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { resolver } from '../storyblok'

export default {
  props: {
    temoignages: {
      type: Array,
      required: true
    }
  },
  computed: {
    cleanedTemoignages() {
      return this.temoignages.map(t => ({
          ...t.content,
          Citation: resolver.render(t.content.Citation)
        })
      )
    }
  }
}
</script>