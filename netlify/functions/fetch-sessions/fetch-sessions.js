require('dotenv').config()
const { $fetch } = require('ohmyfetch')
const dayjs = require('dayjs')
const customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(customParseFormat)

const tixomUrl = process.env.TIXOOM_URL

const handler = async function () {
  try {
    const { results: events } = await $fetch(tixomUrl)

    const sessions = events
      .map(event => {
        const showtime = dayjs(event.showtime.slice(5, 26), 'MMM DD, YYYY hh:mm A')
        return {
          ...event,
          showtime,
          startTime: showtime.format('HH:mm')
        }
      })
      .sort((s1, s2) => s1.showtime.unix() > s2.showtime.unix() ? 1 : -1)

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
