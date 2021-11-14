require('dotenv').config()
const { $fetch } = require('ohmyfetch')
const dayjs = require('dayjs')
const customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(customParseFormat)

const tixoomUrl = process.env.TIXOOM_URL
const apiKey = process.env.EVENTZILLA_API_KEY

const handler = async function () {
  try {
    const sessionsZilla = await fetchEventzilla()
    
    const { results: events } = await $fetch(tixoomUrl)

    const sessions = events
      .map(event => {
        const showtime = dayjs(event.showtime.slice(5, 26), 'MMM DD, YYYY hh:mm A')
        return {
          ...event,
          id: event.tag,
          provider: 'tixoom',
          showtime,
          startTime: showtime.format('HH:mm')
        }
      })
      .sort((s1, s2) => s1.showtime.unix() > s2.showtime.unix() ? 1 : -1)

    return {
      statusCode: 200,
      body: JSON.stringify({ sessions: [...sessions, ...sessionsZilla] })
    }
  } catch (error) {
    // output to netlify function log
    console.log(error)
    return {
      statusCode: 500,
      // Could be a custom message or object i.e. JSON.stringify(err)
      body: JSON.stringify({ msg: error.message }),
    }
  }
}

const fetchEventzilla = () => {
  return new Promise(async (resolve) => {
    const sessionsObj = {}
    const { events_live } = await $fetch('https://www.eventzillaapi.net/api/v2/events?offset=0&limit=100&status=live', {
      headers: { Accept: 'application/json', 'x-api-key': apiKey }
    })
    events_live.forEach(event => {
      sessionsObj[event.id] = event
    })
    const { events } = await $fetch('https://www.eventzillaapi.net/api/v2/events?offset=0&limit=100', {
      headers: { Accept: 'application/json', 'x-api-key': apiKey }
    })
    events.forEach(event => {
        if (!sessionsObj[event.id]) sessionsObj[event.id] = event
      })
    resolve(Object.values(sessionsObj)
      .sort((s1, s2) => s1.start_time > s2.start_time ? 1 : -1)
      .map(s => ({
        ...s,
        availability: s.tickets_sold + 1,
        provider: 'eventzilla',
        showtime: s.start_date,
        startTime: s.start_time,
        topic: s.title
      }))
    )
  })

}

module.exports = { handler }
