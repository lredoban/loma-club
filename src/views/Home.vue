<template>
  <main>
    <Hero/>
    <CTASection/>
    <Features/>
    <TestimonialsSection/>
    <MediasSections/>
    <FAQSection id="faq"/>
  </main>
</template>

<script>
import CTASection from '../components/CTASection.vue'
import FAQSection from '../components/FAQSection.vue'
import Features from '../components/Features.vue'
import Hero from '../components/Hero.vue'
import MediasSections from '../components/MediasSections.vue'
import TestimonialsSection from '../components/TestimonialsSection.vue'

import { inject, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import useUser from '../user'


export default {
  components: {
    CTASection,
    FAQSection,
    Features,
    Hero,
    MediasSections,
    TestimonialsSection,
  },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const { lastEvent, user } = useUser()
    const $toast = inject('$toast')

    if (route.fullPath.includes('#error_code=404')) $toast.error('Votre lien a expiré')
    watch(lastEvent, newValue => {
      if (newValue === 'PASSWORD_RECOVERY') router.push('/profil?recovery=true')
    })
    return {
      lastEvent,
      user
    }
  }
}
</script>
