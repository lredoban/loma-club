require('dotenv').config()
const { $fetch } = require('ohmyfetch')
const dayjs = require('dayjs')
const customParseFormat = require('dayjs/plugin/customParseFormat')
const utc = require('dayjs/plugin/utc')
const timezone = require('dayjs/plugin/timezone') // dependent on utc plugin
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(customParseFormat)

const tixoomUrl = process.env.TIXOOM_URL

const handler = async function () {
  try {
    const { results } = await $fetch(tixoomUrl)

    const sessions = results
      .map(event => {
        const showtime = dayjs.tz(event.showtime.slice(5, -4), 'MMM D, YYYY hh:mm A',event.timezone)
        return {
          ...event,
          id: event.tag,
          logShowtime: event.showtime,
          showtime
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
      body: JSON.stringify({ msg: error.message }),
    }
  }
}

module.exports = { handler }
