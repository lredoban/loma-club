<template>
  <main>
    <template v-if="!!story">
      <Hero :story="story" />
      <CTASection :story="story" />
      <Features :features="story.Features" class="bg-dots"/>
      <TestimonialsSection :temoignages="story.Temoignages" />
      <MediasSections :links="story.Links" />
      <FAQSection id="faq" :questions="story.FAQ" />
    </template>
  </main>
</template>

<script>
import CTASection from '../components/CTASection.vue'
import FAQSection from '../components/FAQSection.vue'
import Features from '../components/Features.vue'
import Hero from '../components/Hero.vue'
import MediasSections from '../components/MediasSections.vue'
import TestimonialsSection from '../components/TestimonialsSection.vue'

import useStoryblok from '../storyblok'

export default {
  components: {
    CTASection,
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
