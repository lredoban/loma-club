require('dotenv').config()
const { $fetch } = require('ohmyfetch')

const apiKey = process.env.EVENTZILLA_API_KEY

const handler = async function () {
  try {
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
    const sessions = Object.values(sessionsObj).sort((s1, s2) => s1.start_time > s2.start_time ? 1 : -1)

    return {
      statusCode: 200,
      body: JSON.stringify({ sessions })
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

module.exports = { handler }
