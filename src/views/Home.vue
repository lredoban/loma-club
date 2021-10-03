<template>
  <main>
    <Hero/>
    <CTASection/>
    <Features/>
    <TestimonialsSection/>
    <MediasSections/>
    <FAQSection id="faq"/>
    <ExpiredModal :open="openExpiredModal" @close="openExpiredModal = false"/>
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

    if (route.fullPath.includes('#error_code=404')) {
      openExpiredModal.value = true
      $toast.error('Votre lien a expiré')
    }
    watch(lastEvent, newValue => {
      if (newValue === 'PASSWORD_RECOVERY') router.push('/profil?recovery=true')
    })
    return {
      lastEvent,
      user,
      openExpiredModal
    }
  }
}
</script>
