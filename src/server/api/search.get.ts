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

  const [news, totalNews, jobs, totalJobs, products, totalProducts] =
    await Promise.all([
      prisma.news.findMany({
        where: {
          deletedAt: null,
          ...(searchValue && {
            OR: [
              { title: { contains: searchValue, mode: 'insensitive' } },
              { text: { contains: searchValue, mode: 'insensitive' } }
            ]
          })
        },
        include: { category: true },
        orderBy: { createdAt: 'desc' }
      }),
      prisma.news.count({
        where: {
          deletedAt: null,
          ...(searchValue && {
            OR: [
              { title: { contains: searchValue, mode: 'insensitive' } },
              { text: { contains: searchValue, mode: 'insensitive' } }
            ]
          })
        }
      }),
      prisma.job.findMany({
        where: {
          deletedAt: null,
          ...(searchValue && {
            OR: [{ name: { contains: searchValue, mode: 'insensitive' } }]
          })
        },
        orderBy: { createdAt: 'desc' }
      }),
      prisma.job.count({
        where: {
          deletedAt: null,
          ...(searchValue && {
            OR: [{ name: { contains: searchValue, mode: 'insensitive' } }]
          })
        }
      }),
      prisma.product.findMany({
        where: {
          deletedAt: null,
          ...(searchValue && {
            OR: [{ name: { contains: searchValue, mode: 'insensitive' } }]
          })
        },
        orderBy: { createdAt: 'desc' }
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

  return { news, totalNews, jobs, totalJobs, products, totalProducts }
})
