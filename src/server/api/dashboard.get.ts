import { defineEventHandler } from 'h3'
import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async event => {
  const [news, cards] = await Promise.all([
    prisma.news.findMany({
      where: { deletedAt: null },
      orderBy: { createdAt: 'desc' },
      take: 7,
      include: { category: true }
    }),
    prisma.dashboardCard.findMany({
      orderBy: { position: 'desc' }
    })
  ])

  return { news, cards }
})
