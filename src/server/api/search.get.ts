import { defineEventHandler } from 'h3'
import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async event => {
  const query = getQuery(event)
  const searchValue = String(query.value || '').trim()

  if (searchValue.length < 3 || searchValue.length > 100)
    throw createError({
      statusCode: 400,
      statusMessage: 'Search value should be between 3 and 100 chars.'
    })

  const [products, totalProducts] = await Promise.all([
    prisma.product.findMany({
      where: {
        deletedAt: null,
        ...(searchValue && {
          OR: [{ name: { contains: searchValue, mode: 'insensitive' } }]
        })
      },
      orderBy: { createdAt: 'desc' },
      include: { productCategory: true }
    }),
    prisma.product.count({
      where: {
        deletedAt: null,
        ...(searchValue && {
          OR: [{ name: { contains: searchValue, mode: 'insensitive' } }]
        })
      }
    })
  ])

  return { products, totalProducts }
})
