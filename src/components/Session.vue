<script>
import { computed } from 'vue'

export default {
  props: {
    date: { 
      type: Object,
      required: true
    },
    session: { 
      type: Object,
      required: true
    },
    today: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const { date, session, today } = props
    const ticketsLeft = computed(() => session.tickets_total - session.tickets_sold )
    const hasTickets = computed(() => ticketsLeft.value > 0 )
    const displayBookingInfos = today.isBefore(date) || today.isSame(date) && today.hour() < +(session.start_time.split(':')[0])

    return {
      displayBookingInfos,
      hasTickets,
      session,
      ticketsLeft
    }
  }
}
</script>

<template>
  <div>
    <h3 class="font-semibold text-ocre tracking-wide">{{ session.title }}</h3>
    <p class="font-semibold text-beige">{{ session.start_time }}</p>
    <template v-if="displayBookingInfos">
      <div class="text-sm">
        <p v-if="hasTickets">Places restantes: {{ ticketsLeft }}</p>
        <p v-else>Plus de place disponible</p>
      </div>
      <div class="mt-4 ">
        <a :href="session.url" target="_blank" reel="noopener" class="relative inline-block py-0 px-5 rounded-full bg-ocre text-white tracking-wide uppercase hover:ring-2 hover:ring-offset-2 hover:ring-ocre">
          <span>
            {{
              hasTickets ?
                'Réserver' :
                'Intégrer'
            }}
          </span>
          <small v-if="!hasTickets" class="absolute text-ocre bottom-0 left-0 -mb-4 ml-3 text-xs lowercase">la liste d'attente</small>
        </a>
      </div>
    </template>
  </div>
</template>
