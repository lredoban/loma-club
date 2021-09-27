import { computed, ref, readonly } from 'vue'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY)
const user = ref(null)
const lastEvent = ref('')
const isAuth = computed(() => user.value?.aud === 'authenticated')

supabase.auth.onAuthStateChange((event, session) => {
  if (session?.user) {
    user.value = session.user
  }
  if (event === 'SIGNED_OUT') user.value = null
  lastEvent.value = event
})

user.value = supabase.auth.user()

export default () => {

  return {
    lastEvent: readonly(lastEvent),
    user: readonly(user),
    isAuth,
    login: (email, password) => new Promise(async (resolve, reject) => {
      const { user: newUser, error } = await supabase.auth.signIn({
          email,
          password
      })
      if (!!error) reject(error)
      else {
        user.value = newUser
        resolve(newUser)
      }
    }),
    logout: () => supabase.auth.signOut(),
    resetPassword: email => supabase.auth.api.resetPasswordForEmail(email),
    updatePassword: password => supabase.auth.update({
      password
    })
  }
}
