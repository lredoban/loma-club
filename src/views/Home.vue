<template>
  <main>
    <!-- So netlify can handle JS rendered form in CTASection-->
    <form netlify class="hidden">
      <input type="hidden" name="form-name" value="newsletter" />
      <input type="hidden" name="email">
    </form>
    <template v-if="!!story">
      <Hero :story="story" />
      <CTASection :story="story" />
      <Features :features="story.Features" />
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
