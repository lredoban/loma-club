require('dotenv').config()
const { $fetch } = require('ohmyfetch')

const apiKey = process.env.EVENTZILLA_API_KEY

const handler = async function () {
  try {
    const { events_live: sessions } = await $fetch('https://www.eventzillaapi.net/api/v2/events?status=live', {
      headers: { Accept: 'application/json', 'x-api-key': apiKey }
    })
    
    return {
      statusCode: 200,
      body: JSON.stringify({ sessions }),
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
