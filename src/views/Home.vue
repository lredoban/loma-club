<template>
  <main>
    <template v-if="!!story">
      <Hero :story="story"/>
      <Features :features="story.Features" />
      <ContentSection :story="story.Content" />
      <TestimonialsSection :temoignages="story.Temoignages"/>
      <MediasSections :links="story.Links"/>
      <FAQSection id="faq" :questions="story.FAQ"/>
    </template>
  </main>
</template>

<script>
import ContentSection from '../components/ContentSection.vue'
import FAQSection from '../components/FAQSection.vue'
import Features from '../components/Features.vue'
import Hero from '../components/Hero.vue'
import MediasSections from '../components/MediasSections.vue'
import TestimonialsSection from '../components/TestimonialsSection.vue'

import useStoryblok from '../storyblok'

export default {
  components: {
    ContentSection,
    FAQSection,
    Features,
    Hero,
    MediasSections,
    TestimonialsSection
},
  setup() {
    const { story } = useStoryblok('home', { resolve_relations: 'Homepage.Temoignages' })

    return {
      story
    }
  }
}
</script>
