import { defineEventHandler } from 'h3'
import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async event => {
  const query = getQuery(event)
  const categoryId = String(query.categoryId)
  const perPage = Number(query.perPage) || 10
  const page = Number(query.page) || 1
  const skip = (page - 1) * perPage

  const where = query.categoryId
    ? { deletedAt: null, categoryId }
    : { deletedAt: null }

  const [news, total] = await Promise.all([
    prisma.news.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      skip,
      take: perPage
    }),
    prisma.news.count({
      where: { deletedAt: null }
    })
  ])

  return { news, total }
})
