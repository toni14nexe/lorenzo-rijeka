import { defineEventHandler } from 'h3'
import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async event => {
  const dashboardCards = await prisma.dashboardCard.findMany({
    orderBy: { position: 'desc' }
  })

  return dashboardCards
})
