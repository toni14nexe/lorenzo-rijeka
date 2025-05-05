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
    ? { deletedAt: null, productCategoryId: { in: categoryIds } }
    : { deletedAt: null }

  const [products, total] = await Promise.all([
    prisma.product.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      skip,
      take: perPage
    }),
    prisma.product.count({ where })
  ])

  return { products, total }
})
