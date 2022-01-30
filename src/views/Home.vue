<template>
  <main>
    <template v-if="!!story">
      <Hero :story="story"/>
      <CTASection :story="story"/>
      <Features :features="story.Features" />
      <TestimonialsSection :temoignages="story.Temoignages"/>
      <MediasSections :links="story.Links"/>
      <FAQSection id="faq" :questions="story.FAQ"/>
      <ExpiredModal :open="openExpiredModal" @close="openExpiredModal = false"/>
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
import ExpiredModal from '../components/ExpiredModal.vue'

import { inject, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import useUser from '../user'
import useStoryblok from '../storyblok'

export default {
  components: {
    CTASection,
    FAQSection,
    Features,
    Hero,
    MediasSections,
    TestimonialsSection,
    ExpiredModal
  },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const { lastEvent, user } = useUser()
    const $toast = inject('$toast')
    const openExpiredModal = ref(false)
    const { story } = useStoryblok('home', { resolve_relations: 'Homepage.Temoignages' })

    if (route.fullPath.includes('#error_code=404')) {
      openExpiredModal.value = true
      $toast.error('Votre lien a expiré')
    }
    watch(lastEvent, newValue => {
      if (newValue === 'PASSWORD_RECOVERY') router.push('/profil?recovery=true')
    })
    return {
      story,
      lastEvent,
      user,
      openExpiredModal
    }
  }
}
</script>
