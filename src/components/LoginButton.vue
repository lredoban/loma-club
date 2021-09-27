<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="fixed z-10 inset-0 overflow-y-auto" @close="$emit('close')">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <DialogOverlay class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
          <div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
            <div>
              <div class="mt-3 text-center sm:mt-5">
                <DialogTitle as="h3" class="text-lg leading-6 font-medium text-gray-900">
                  Connexion
                </DialogTitle>
                <div class="mt-6">
                  <form ref="form" action="#" method="POST" class="space-y-6" @submit.prevent="logUser">
                    <div>
                      <label for="email" class="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <div class="mt-1">
                        <input v-model="email" ref="emailRef" id="email" name="email" type="email" autocomplete="email" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-ocre focus:border-ocre sm:text-sm" />
                      </div>
                    </div>

                    <div class="space-y-1">
                      <label for="password" class="block text-sm font-medium text-gray-700">
                        Mot de passe
                      </label>
                      <div class="mt-1">
                        <input v-model="password" id="password" name="password" type="password" autocomplete="current-password" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-ocre focus:border-ocre sm:text-sm" />
                      </div>
                    </div>

                    <div class="flex items-center justify-between">
                      <div class="text-sm">
                        <button class="font-medium text-ocre hover:text-ocre" :disabled="loading" @click.prevent="reset">
                          Mot de passe oublié?
                        </button>
                      </div>
                    </div>

                    <div class="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                      <button type="submit" :disabled="loading" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-ocre text-base font-medium text-white hover:bg-ocre hover:brightness-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ocre sm:col-start-2 sm:text-sm disabled:opacity-50 disabled:cursor-not-allowed">
                        Se connecter
                      </button>
                      <button type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ocre sm:mt-0 sm:col-start-1 sm:text-sm" @click="$emit('close')" ref="cancelButtonRef">
                        J'ai changé d'avis
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { ref, inject } from 'vue'

import useUser from '../user'

import { CheckIcon } from '@heroicons/vue/outline'
import { Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'

export default {
  components: {
    CheckIcon,
    Dialog,
    DialogOverlay,
    DialogTitle,
    Notification,
    TransitionChild,
    TransitionRoot
  },
  props: { open: Boolean },
  setup(_, { emit }) {
    const form = ref(null)
    const email = ref('')
    const emailRef = ref(null)
    const password = ref('')
    const loading = ref(false)
    const $toast = inject('$toast')
    const { user, login, resetPassword } = useUser()

    const logUser = async () => {
      loading.value = true

      if (!form.value.checkValidity()) return
      await login(email.value, password.value)
        .then(_ => {
          emit('close')
        })
        .catch(_ => {
          $toast.error('Email ou mot de passe invalide')
        })
      setTimeout(() => {
        loading.value = false
      }, 2000)
    }

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
      form,
      loading,
      logUser,
      password,
      reset,
      user
    }
  },
}
</script>
