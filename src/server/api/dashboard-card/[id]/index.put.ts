import { createError, defineEventHandler, readBody } from 'h3'
import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async event => {
  const { params } = event.context

  if (!params || !params.id) {
    throw createError({
      statusCode: 400,
      statusMessage: 'ID parameter is required'
    })
  }

  const body = await readBody(event)

  try {
    const dashboardCard = await prisma.dashboardCard.update({
      where: { id: params.id },
      data: {
        title: body.title,
        text: body.text,
        position: Number(body.position)
      }
    })

    return dashboardCard
  } catch (error) {
    console.error('Error updating dashboard card:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to update dashboard card'
    })
  }
})
