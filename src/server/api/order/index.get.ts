import { defineEventHandler } from 'h3'
import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async event => {
  const query = getQuery(event)
  const perPage = Number(query.perPage) || 10
  const page = Number(query.page) || 1
  const skip = (page - 1) * perPage

  const [orders, total] = await Promise.all([
    prisma.order.findMany({
      where: { deletedAt: null },
      orderBy: { createdAt: 'desc' },
      skip,
      take: perPage
    }),
    prisma.order.count({ where: { deletedAt: null } })
  ])

  return { orders, total }
})
