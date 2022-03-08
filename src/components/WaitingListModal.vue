<template>
  <BaseModal v-bind="$attrs" :open="open">
    <h4>
     Il nous faut un email pour t'ajouter à la liste d'attente
    </h4>
    <form ref="form" action="#" method="POST" class="mt-12 space-y-6" @submit.prevent="handleSubmit">
      <div class="space-y-1">
        <label for="email" class="block text-sm font-medium text-gray-700">
          Email
        </label>
        <div class="mt-1">
          <input v-model="email"  id="email" name="email" type="email" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-ocre focus:border-ocre sm:text-sm" />
        </div>
      </div>

      <div class="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
        <button type="submit" :disabled="loading" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-ocre text-base font-medium text-white hover:bg-ocre hover:brightness-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ocre sm:col-start-2 sm:text-sm disabled:opacity-50 disabled:cursor-not-allowed">
          Intégrer la liste
        </button>
      </div>
    </form>
  </BaseModal>
</template>

<script>
import { ref } from 'vue'

import BaseModal from './BaseModal.vue'

export default {
  components: {
    BaseModal
  },
  props: { open: Boolean },
  setup(_, { emit }) {
    const email = ref('')
    const loading = ref(false)
    const form = ref(null)

    const handleSubmit = async () => {
      if (!form.value.checkValidity()) return
      loading.value = true
      emit('submit', email.value)
    }

    return {
      handleSubmit,
      email,
      form,
      loading
    }
  },
}
</script>
