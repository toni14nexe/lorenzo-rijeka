import { defineEventHandler, readBody } from 'h3'
import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async event => {
  if (event.req.method === 'POST') {
    const body = await readBody(event)

    if (!body.title || !body.text) {
      throw createError({
        statusCode: 400,
        statusMessage:
          "Body parameter is missing, this body should include: 'title' and 'text'. 'position' is optional."
      })
    }

    const dashboardCard = await prisma.dashboardCard.create({
      data: {
        title: body.title,
        text: body.text,
        position: Number(body.position)
      }
    })

    return dashboardCard
  }
})
