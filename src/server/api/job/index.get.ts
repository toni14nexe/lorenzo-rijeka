import { defineEventHandler } from 'h3'
import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async event => {
  const query = getQuery(event)
  const jobCategoryId = String(query.jobCategoryId)
  const perPage = Number(query.perPage) || 10
  const page = Number(query.page) || 1
  const skip = (page - 1) * perPage

  const where = query.categoryId
    ? { deletedAt: null, jobCategoryId }
    : { deletedAt: null }

  const [jobs, total] = await Promise.all([
    prisma.job.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      skip,
      take: perPage
    }),
    prisma.job.count({
      where: { deletedAt: null }
    })
  ])

  return { jobs, total }
})
