<template>
  <main class="mx-auto py-6 px-2 border-ocre md:px-6">
    <h1 class="text-5xl text-center absolute opacity-0">
      Le planning
    </h1>
    <p>
      Le planning montre les 2 prochaines semaines. Il se met à jour tous les lundi ;)
    </p>
    <div v-if="sessions.length === 0" class="h-screen w-full flex items-center justify-center -mt-16 -mb-48">
      <span class="animate-bounce -mt-24 text-4xl">
        Chargement
      </span>
    </div>
    <div v-else class="divide-y-2 divide-dashed divide-opacity-20 divide-ocre">
      <div v-for="(week, i) in weeks" :key="i">
        <ol class="my-12 grid grid-cols-2 gap-x-6 gap-y-16 justify-items-center md:grid-cols-3 lg:grid-cols-5">
          <li v-for="d in week" :key="d.dayOfYear" :class="today.isAfter(d.date) && 'opacity-30'">
            <div class="text-center font-semibold tracking-wide mb-6">{{ d.day }} {{ d.date.format('DD/MM') }}</div>
            <div v-if="d.sessions.length === 0">Pas de session</div>
            <div v-else class="space-y-10">
              <Session v-for="session in d.sessions" :key="session.id" :session="session" :date="d.date" :today="today" />
            </div>
          </li>
        </ol>
      </div>
    </div>
  </main>
</template>

<script>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import useUser from '../user'
import dayjs from 'dayjs'
import 'dayjs/locale/fr'
import dayOfYear from 'dayjs/plugin/dayOfYear'
// import sessionsJson from './sessions.json'

import Session from '../components/Session.vue'

dayjs.extend(dayOfYear)

const daysList = [
  'lundi',
  'mardi',
  'mercredi',
  'jeudi',
  'vendredi'
]

export default {
  components: {
    Session
  },
  setup () {
    const weeks = ref([])
    const sessions = ref([])
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    const router = useRouter()

    const now = dayjs().locale('fr')
    const seedWeek = offset => daysList.map((day, i) => {
      const date = now.day(i + offset)
      return {
        day, date, dayOfYear: date.dayOfYear(), sessions: []
      }
    })
    weeks.value.push(seedWeek(1))
    weeks.value.push(seedWeek(8))



    const seedSessions = sessions => {
      sessions.forEach(session => {
        const sessionDay = dayjs(session.start_date).dayOfYear()
        console.warn(dayjs(session.start_date), sessionDay)
        const dateObj = weeks.value.reduce((found, days) => found || days.find(day => day.dayOfYear === sessionDay), null)
        if (!!dateObj) dateObj.sessions.push(session)
      })
    }

    onMounted(() => {
      // sessions.value = sessionsJson
      // seedSessions(sessions.value)
      fetch('/.netlify/functions/fetch-sessions').then(res => {
        if (res.ok) {
          res.json().then(data => {
            sessions.value = data.sessions.filter(e => e.status === 'Live' || e.status === 'SoldOut')
            seedSessions(sessions.value)
          })
        }
      })
    })

    return {
      dateOptions,
      sessions,
      today: now,
      weeks
    }
  }
}
</script>
