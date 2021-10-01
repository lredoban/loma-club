<template>
  <BaseModal v-bind="$attrs" :open="open" title="Bienvenue dans le Loma Club">
    <h4>
      Tu peux désormais créer le mot de passe pour {{ user.email }}
    </h4>
    <form ref="form" action="#" method="POST" class="mt-12 space-y-6" @submit.prevent="handleSubmit">
      <div class="space-y-1">
        <label for="password" class="block text-sm font-medium text-gray-700">
          Mot de passe
        </label>
        <div class="mt-1">
          <input v-model="password"  id="password" name="password" type="password" autocomplete="current-password" required="" minlength="6" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-ocre focus:border-ocre sm:text-sm" />
        </div>
      </div>

      <div class="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
        <button type="submit" :disabled="loading" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-ocre text-base font-medium text-white hover:bg-ocre hover:brightness-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ocre sm:col-start-2 sm:text-sm disabled:opacity-50 disabled:cursor-not-allowed">
          Créer mon mot de passe
        </button>
      </div>
    </form>
  </BaseModal>
</template>

<script>
import { ref, inject, onMounted } from 'vue'

import useUser from '../user'

import BaseModal from './BaseModal.vue'

export default {
  components: {
    BaseModal
  },
  props: { open: Boolean },
  setup(_, { emit }) {
    const form = ref(null)
    const password = ref('')
    const loading = ref(false)
    const $toast = inject('$toast')
    const { user, updatePassword } = useUser()

    const handleSubmit = async () => {
      if (!form.value.checkValidity()) return
      loading.value = true
      const { _, error } = await updatePassword(password.value)
      if (!!error) $toast.error(error?.message)
      else $toast.success('Votre mot de passe a été créé')
      emit('close')
      loading.value = false
    }

    onMounted(() => {
      if (!user.value) emit('close')
    })

    return {
      form,
      handleSubmit,
      loading,
      password,
      user
    }
  },
}
</script>
