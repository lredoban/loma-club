<template>
  <div>
    <TheHeader />
    <div>
      <router-view />
    </div>
    <TheFooter/>
    <InviteModal :open="openInvite" @close="openInvite = false"/>
  </div>
</template>

<style lang="sass">
.container
  @apply max-w-screen-xl py-6 mx-auto sm:px-6 lg:px-8
</style>

<script>
import { provide } from 'vue'
import useUser from './user'
import TheFooter from './components/TheFooter.vue'
import TheHeader from './components/TheHeader.vue'
import InviteModal from './components/InviteModal.vue'

const { isAuth } = useUser()

export default {
  components: { InviteModal, TheFooter, TheHeader},
  data: () => ({
    openInvite: false
  }),
  created() {
    provide('$toast', this.$toast)
  },
  watch: {
    isAuth(newValue, oldValue) {
      if (newValue && !oldValue && window.location.search.includes('invite'))
        this.openInvite = true
    }
  },
  computed: {
    isAuth() {
      return isAuth.value
    }
  }
}

</script>
