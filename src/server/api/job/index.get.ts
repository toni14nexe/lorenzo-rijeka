import { defineEventHandler } from 'h3'
import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async event => {
  const query = getQuery(event)
  const perPage = Number(query.perPage) || 10
  const page = Number(query.page) || 1
  const skip = (page - 1) * perPage
  const categoryIds = query.categoryIds
    ? String(query.categoryIds)
        .split(',')
        .map(id => id.trim())
    : undefined

  const where = query.categoryIds
    ? { deletedAt: null, jobCategoryId: { in: categoryIds } }
    : { deletedAt: null }

  const [jobs, total] = await Promise.all([
    prisma.job.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      skip,
      take: perPage
    }),
    prisma.job.count({ where })
  ])

  return { jobs, total }
})
