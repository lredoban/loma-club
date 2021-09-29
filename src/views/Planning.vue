<template>
  <main class="mx-auto py-6 px-2 border-ocre md:px-6">
    <h1 class="text-5xl text-center absolute opacity-0">
      Le planning
    </h1>
    <div class="divide-y-2 divide-dashed divide-opacity-20 divide-ocre">
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
import { onMounted, ref, unref } from 'vue'
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
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    const router = useRouter()
    const { isAuth } = useUser()

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
      if (!isAuth.value) {
        router.replace('/')
        return
      }
      // seedSessions(sessionsJson)
      fetch('/.netlify/functions/fetch-sessions').then(res => {
        if (res.ok) {
          res.json().then(data => {
            const filteredSessions = data.sessions.filter(e => e.status === 'Live')
            seedSessions(filteredSessions)
          })
        }
      })
    })

    return {
      dateOptions,
      weeks,
      today: now
    }
  }
}
</script>
