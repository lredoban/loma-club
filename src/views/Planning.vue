<template>
  <h2 class="text-2xl">
    Le planning
  </h2>
  <ul v-if="sessions.length">
    <li v-for="session in sessions" :key="session">
      <div class="font-bold text-xl">{{ session.title }}</div>
      <div>{{ new Date(session.start_date).toLocaleDateString('fr-FR', dateOptions) }}</div>
      <div>{{ session.start_time }}</div>
      <a :href="session.url">Réserver</a>
    </li>
  </ul>
</template>

<script>
import { onMounted, ref, unref } from 'vue'

export default {
  setup () {
    const sessions = ref([])
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

    onMounted(() => {
      fetch('/.netlify/functions/fetch-sessions').then(res => {
        if (res.ok) {
          res.json().then(data => {
            sessions.value = data.sessions.filter(e => e.status === 'Live')
            console.warn(unref(sessions))
          })
        }
      })
    })

    return {
      sessions,
      dateOptions
    }
  }
}
</script>
