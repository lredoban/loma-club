<template>
  <div class="min-h-screen flex flex-col">
    <TheHeader />
    <div class="flex-grow">
      <router-view />
    </div>
    <TheFooter/>
  </div>
</template>

<style lang="sass">
.container
  @apply max-w-screen-xl py-6 mx-auto sm:px-6 lg:px-8
</style>

<script>
import { provide } from 'vue'
import TheFooter from './components/TheFooter.vue'
import TheHeader from './components/TheHeader.vue'

export default {
  components: { TheFooter, TheHeader},
  created() {
    provide('$toast', this.$toast)
  }
}

</script>
