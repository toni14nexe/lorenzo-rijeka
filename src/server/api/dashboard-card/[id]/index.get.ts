import { createError, defineEventHandler } from 'h3'
import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async event => {
  const { params } = event.context
  if (!params || !params.id) {
    throw createError({
      statusCode: 400,
      statusMessage: 'ID parameter is required'
    })
  }

  const dashboardCard = await prisma.dashboardCard.findUnique({
    where: { id: params.id }
  })

  if (!dashboardCard) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Dashboard card not found or deleted'
    })
  }

  return dashboardCard
})
