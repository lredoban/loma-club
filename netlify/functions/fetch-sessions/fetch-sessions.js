require('dotenv').config()
const { $fetch } = require('ohmyfetch')
const dayjs = require('dayjs')
const customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(customParseFormat)

const tixoomUrl = process.env.TIXOOM_URL

const handler = async function () {
  try {
    const { results } = await $fetch(tixoomUrl)

    const sessions = results
      .map(event => {
        const showtime = dayjs(event.showtime.slice(5, -4), 'MMM D, YYYY hh:mm A')
        return {
          ...event,
          id: event.tag,
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
      body: JSON.stringify({ msg: error.message }),
    }
  }
}

module.exports = { handler }
