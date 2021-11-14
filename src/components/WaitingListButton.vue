<script setup>
import { defineProps, inject } from 'vue'
import useUser from '../user'

const { addToWaitlist } = useUser()
const $toast = inject('$toast')
const { session } = defineProps({ session: Object })


const handleWaitlistClick = async() => {
  const { data, error } = await addToWaitlist(session.id)
  if (!!error)
    $toast.error(error.message)
  else
    $toast.success(`Un email sera envoyé à ${data[0].email} dès qu'une place se libèrera.`)
}
</script>

<template>
  <button
    class="relative py-0 px-5 rounded-full bg-ocre text-white tracking-wide uppercase hover:ring-2 hover:ring-offset-2 hover:ring-ocre"
    @click="handleWaitlistClick"
  >
    Intégrer
    <small class="absolute text-ocre bottom-0 left-0 -mb-4 ml-3 text-xs lowercase">la liste d'attente</small>
  </button>
</template>
