import { defineEventHandler } from 'h3'
import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async event => {
  const query = getQuery(event)
  const perPage = Number(query.perPage) || 10
  const page = Number(query.page) || 1
  const skip = (page - 1) * perPage
  const deletedOnly = query.deletedOnly === 'true'
  const categoryIds = query.categoryIds
    ? String(query.categoryIds)
        .split(',')
        .map(id => id.trim())
    : undefined

  const where = query.categoryIds
    ? {
        deletedAt: deletedOnly ? { not: null } : null,
        jobCategoryId: { in: categoryIds }
      }
    : { deletedAt: deletedOnly ? { not: null } : null }

  const [jobs, total] = await Promise.all([
    prisma.job.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      skip,
      take: perPage,
      include: { jobCategory: true }
    }),
    prisma.job.count({ where })
  ])

  return { jobs, total }
})
