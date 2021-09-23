<template>
  <footer class="bg-creme">
    <div class="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
      <nav class="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
        <div v-for="item in navigation.main" :key="item.name" class="px-5 py-2">
          <a :href="item.href" class="text-base text-gray-700 hover:text-gray-900">
            {{ item.name }}
          </a>
        </div>
      </nav>
      <p class="mt-8 text-center text-base text-gray-600">
        &copy; {{ new Date().getFullYear() }} Loma Club
      </p>
    </div>
  </footer>
</template>

<script setup>
const navigation = {
  main: [
    { name: '@josepha_raphard', href: 'https://www.instagram.com/josepha_raphard/?hl=fr' },
    { name: "S'inscrire", href: import.meta.env.VITE_FORM_URL },
    { name: 'Mentions légales & CGV', href: '#' },
    { name: 'Témoignages', href: '#' },
    { name: 'Média', href: '#' },
    { name: 'by Lova', href: 'https://lovasoa.fr' },
  ]
}
</script>