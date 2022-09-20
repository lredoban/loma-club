<script setup>
import { computed } from 'vue-demi'
import useStoryblok from '../storyblok'
import Features from '../components/Features.vue'

const { story, resolver } = useStoryblok('tarifs')
const features = computed(() => {
  console.warn({story: story?.value?.features})
  return story?.value?.features.map(f => ({ ...f, Texte: resolver.render(f.Texte) }))
})
</script>


<template>
  <div>
    <Features v-if="features" :features="features">
      <template v-slot:header>
        <div class="prose prose-sm">
          <h1 p>Tarifs et packs</h1>
        </div>
      </template>
      <div>
        <a href="/promo" class="text-xl btn">
          Comment utiliser un code promo
        </a>
      </div>
    </Features>
  </div>
</template>

<style>
.rounded-shadow {
  opacity: 0.02;
  background-image: radial-gradient(transparent 4.64334px, black 4.64334px);
  background-size: 9px 9px;
  background-color: transparent;
}
</style>