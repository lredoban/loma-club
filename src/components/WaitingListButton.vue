<script setup>
import { inject, ref } from 'vue'
import WaitingListModal from './WaitingListModal.vue'

const $toast = inject('$toast')
const { session } = defineProps({ session: Object })
const openModal = ref(false)


const handleWaitListSubmit = async(email) => {
  if (typeof email !== 'string') return
  const body = { id: session.tag, email, link: session.url, title: session.topic, timezone: session.timezone, startDate: session.showtime }

  fetch('/.netlify/functions/waitingList', {
    method: "POST",
    body: JSON.stringify(body)
  }).then(res => {
    openModal.value = false
    $toast.success(`Un email sera envoyé à ${email} dès qu'une place se libèrera pour ${session.topic}.`)
  }).catch(err => {
    openModal.value = false
    $toast.error(`Votre inscription n'a pas été prise en compte, désolé.`)
  })
}
</script>

<template>
  <button
    class="relative py-0 px-5 rounded-full bg-ocre text-white tracking-wide uppercase hover:ring-2 hover:ring-offset-2 hover:ring-ocre"
    @click="openModal = true"
  >
    Intégrer
    <small class="absolute text-ocre bottom-0 left-0 -mb-4 ml-3 text-xs lowercase">la liste d'attente</small>
  </button>
  <WaitingListModal :open="openModal" @close="openModal = false" @submit="handleWaitListSubmit"/>
</template>
