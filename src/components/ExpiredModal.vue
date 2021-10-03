<template>
  <BaseModal v-bind="$attrs" :open="open" title="Lien expiré">  
    <form action="#" method="POST" class="space-y-6" @submit.prevent="reset">
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">
          Email
        </label>
        <div class="mt-1">
          <input v-model="email" ref="emailRef" id="email" name="email" type="email" autocomplete="email" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-ocre focus:border-ocre sm:text-sm" />
        </div>
      </div>

      <div class="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
        <button type="submit" :disabled="loading" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-ocre text-base font-medium text-white hover:bg-ocre hover:brightness-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ocre sm:col-start-2 sm:text-sm disabled:opacity-50 disabled:cursor-not-allowed">
          Recevoir un nouveau lien
        </button>
        <button type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ocre sm:mt-0 sm:col-start-1 sm:text-sm" @click="$emit('close')" ref="cancelButtonRef">
          Non merci
        </button>
      </div>
    </form>
  </BaseModal>
</template>

<script>
import { ref, inject } from 'vue'

import useUser from '../user'

import BaseModal from './BaseModal.vue'

export default {
  components: {
    BaseModal
  },
  props: { open: Boolean },
  setup(_, { attrs, emit }) {
    const emailRef = ref(null)
    const email = ref('')
    const loading = ref(false)
    const $toast = inject('$toast')
    const { resetPassword } = useUser()

    const reset = async () => {
      loading.value = true
      if (!emailRef.value.checkValidity()) {
        $toast.error('Veuillez entrer un email valide') 
      } else {
        let { _, error } = await resetPassword(email.value)
        if (error?.message) $toast.error(error?.message)
        else {
          $toast.success('Un email de récupération va vous être envoyé.')
          emit('close')
        }
      }
      loading.value = false
    }

    return {
      email,
      emailRef,
      loading,
      reset
    }
  },
}
</script>
