<template>
  <div>
    <TheHeader />
    <div>
      <router-view />
    </div>
    <TheFooter/>
  </div>
</template>

<style lang="sass">
.container
  @apply max-w-screen-xl py-6 mx-auto sm:px-6 lg:px-8
</style>

<script setup>
import TheFooter from './components/TheFooter.vue'
import TheHeader from './components/TheHeader.vue'
</script>
