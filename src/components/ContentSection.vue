<script setup>
import { computed } from 'vue'
import useStoryblok from '../storyblok'

const { resolver } = useStoryblok('a-propos')
const { story } = defineProps({ story: Object })
const body = computed(() => resolver.render(story))
</script>

<template>
  <section class="bg-creme w-full py-12 px-4 flex justify-center sm:px-6 lg:px-8">
    <div v-html="body" class="prose max-w-4xl"></div>
  </section>
</template>