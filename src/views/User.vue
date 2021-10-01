<template>
  <main class="max-w-2xl mx-auto my-24">
    <h1>Hello {{ user.email }}</h1>
    <form ref="form" action="#" method="POST" class="mt-12 space-y-6" @submit.prevent="updatePwd">
      <div class="space-y-1">
        <label for="password" class="block text-sm font-medium text-gray-700">
          Nouveau Mot de passe
        </label>
        <div class="mt-1">
          <input v-model="password" id="password" name="password" type="password" autocomplete="current-password" required="" minlength="6" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-ocre focus:border-ocre sm:text-sm" />
        </div>
      </div>

      <div class="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
        <button type="submit" :disabled="loading" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-ocre text-base font-medium text-white hover:bg-ocre hover:brightness-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ocre sm:col-start-2 sm:text-sm disabled:opacity-50 disabled:cursor-not-allowed">
          Changer de mot de passe
        </button>
      </div>
    </form>
    <button @click.prevent="onLogout" class="mt-24">Se déconnecter</button>
  </main>
</template>

<script>
import useUser from '../user'
import { inject, ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const $toast = inject('$toast')
    const { user, logout, updatePassword } = useUser()
    const router = useRouter()
    const loading = ref(false)
    const password = ref('')

    const onLogout = async () => {
      const { error } = await logout()
      if (error) $toast.error(error?.message)
      router.push('/')
    }

    const updatePwd = async () => {
      loading.value = true
      const { _, error } = await updatePassword(password.value)
      if (!!error) $toast.error(error?.message)
      else $toast.success('Votre mot de passe a été mis à jour')
      loading.value = false
    }

    return {
      loading,
      onLogout,
      password,
      updatePwd,
      user
    }
  }
}
</script>
