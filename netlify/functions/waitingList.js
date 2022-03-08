const { Client } = require('@notionhq/client')

const notion = new Client({ auth: process.env.NOTION_KEY })

const databaseId = process.env.NOTION_DATABASE_ID


exports.handler = async function (event) {
  const { id, email, link, title, startDate, timezone } = JSON.parse(event.body)
    try {
      const response = await notion.pages.create({
        parent: { database_id: databaseId },
        properties: {
          email,
          lien: link,
          title: [{ text: { content: title } }],
          id: [{ text: { content: id } }],
          "Date de la session": { start: startDate, time_zone: 'Europe/Brussels' }
        }
      })
      return {
        statusCode: 200,
        body: JSON.stringify(response)
      }
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ msg: error.body }),
      }
    }
  }
