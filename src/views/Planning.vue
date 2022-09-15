<template>
  <main class="mx-auto py-6 px-2 border-ocre md:px-6">
    <h1 class="text-5xl text-center absolute opacity-0 pointer-events-none">
      Le planning
    </h1>
    <div v-html="html"></div>
    <div>
        <ul>
          <li>
            <a href="https://buy.stripe.com/14k5mTcYL91T5a0cMM" target="_blank" rel="noopener noreferrer">Acheter un pack de 5 sessions</a> = 115€ soit 23€ la session 
          </li>
          <li>
            <a href="https://buy.stripe.com/8wMcPl1g34LDcCs3cd" target="_blank" rel="noopener noreferrer">Acheter un pack de 10 sessions</a> = 200€ soit 20€ la session
          </li>
          <li>
            <a href="/promo">
              Comment utiliser un code promo
            </a>
          </li>
        </ul>
    </div>
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
import { computed, onMounted, ref, unref } from 'vue'
import dayjs from 'dayjs'
import 'dayjs/locale/fr'
import dayOfYear from 'dayjs/plugin/dayOfYear'
import useStoryblok from '../storyblok'
// import sessionsJson from './sessions.json'

import Session from '../components/Session.vue'

dayjs.extend(dayOfYear)

const daysList = [
  'lundi',
  'mardi',
  'mercredi',
  'jeudi',
  'vendredi',
  'samedi'
]

export default {
  components: {
    Session
  },
  setup () {
    const weeks = ref([])
    const sessions = ref([])
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    const { story, resolver } = useStoryblok('planning')
    const html = computed(() => resolver.render(story.value?.body))

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
        session.startTime = dayjs(session.showtime).format('HH:mm')
        const sessionDay = dayjs(session.showtime).dayOfYear()
        const dateObj = weeks.value.reduce((found, days) => found || days.find(day => day.dayOfYear === sessionDay), null)
        if (!!dateObj) dateObj.sessions.push(session)
      })
    }

    onMounted(() => {
      // sessions.value = sessionsJson
      // seedSessions(sessions.value)
      fetch('/.netlify/functions/fetch-sessions')
        .then(res => {
          if (res.ok) {
            res.json().then(data => {
              sessions.value = data.sessions
              seedSessions(sessions.value)
              // remove samedi if no session occurs that day
              if (weeks.value[0][5].sessions.length === 0) weeks.value[0].pop()
              if (weeks.value[1][5].sessions.length === 0) weeks.value[1].pop()
            })
          }
        })
    })

    return {
      html,
      story,
      dateOptions,
      sessions,
      today: now,
      weeks
    }
  }
}
</script>
