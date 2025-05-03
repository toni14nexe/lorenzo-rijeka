import { createError, defineEventHandler } from 'h3'
import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async event => {
  const { params } = event.context
  if (!params || !params.id) {
    throw createError({
      statusCode: 400,
      statusMessage: 'ID parameter is required'
    })
  }

  const news = await prisma.news.findUnique({
    where: {
      id: params.id,
      deletedAt: null
    },
    include: { category: true }
  })

  if (!news) {
    throw createError({
      statusCode: 404,
      statusMessage: 'News not found or deleted'
    })
  }

  return news
})
