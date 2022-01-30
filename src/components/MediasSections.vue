<template>
  <div class="bg-ocre shadow">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-extrabold text-white">
        On parle du Loma Club
      </h2>
      <div class="flow-root mt-8 lg:mt-10">
        <div class="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
          <a v-for="{image, url} in links" :key="url" :href="url" target="_blank" ref="noopener" class="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
            <img class="h-12" :src="image.filename" :alt="image.alt" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      links: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style lang="sass" scoped>
.shadow
  background-image: radial-gradient(#db754a 1px, #d4805c 1px)
  background-size: 5px 5px
</style>
